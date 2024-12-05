import {
  formatFiles,
  getProjects,
  ProjectConfiguration,
  Tree,
  updateJson,
} from '@nx/devkit';

function getScopes(projectMap: Map<string, ProjectConfiguration>) {
  const projects: any[] = Array.from(projectMap.values());
  const allScopes: string[] = projects
    .map((project) => project.tags.filter((tag: string) => tag.startsWith('scope:')))
    .reduce((acc, tags) => [...acc, ...tags], [])
    .map((scope: string) => scope.slice(6));

  return Array.from(new Set(allScopes));
}

function updateSchemaJson(tree: Tree, scopes: string[]) {
  updateJson(tree, 'libs/internal-plugin/src/generators/update-scope-schema/schema.json', (schemaJson) => {
    schemaJson.properties.directory['x-prompt'].items = scopes.map((scope) => ({
      value: scope,
      label: scope,
    }));
    schemaJson.properties.directory.enums = scopes;
    return schemaJson;
  });
}

function updateSchemaInterface(tree: Tree, scopes: string[]) {
  const joinScopes = scopes.map((s) => `'${s}'`).join(' | ');
  const interfaceDefinitionFilePath = 'libs/internal-plugin/src/generators/update-scope-schema/schema.d.ts';
  const newContent = `export interface UpdateScopeSchemaGeneratorSchema {
    name: string;
    directory: ${joinScopes};
  }`;
  tree.write(interfaceDefinitionFilePath, newContent);
}

export async function updateScopeSchemaGenerator(
  tree: Tree,
) {
  const scopes = getScopes(getProjects(tree));
  updateSchemaJson(tree, scopes);
  updateSchemaInterface(tree, scopes);
  await formatFiles(tree);
}

export default updateScopeSchemaGenerator;
