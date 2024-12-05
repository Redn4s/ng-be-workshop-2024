import {
  formatFiles,
  ProjectConfiguration,
  Tree,
  updateJson,
} from '@nx/devkit';
import { UtilLibGeneratorSchema } from './schema';
import { libraryGenerator } from '@nx/js';

function getScopes(projectMap: Map<string, ProjectConfiguration>) {
  const allScopes: string[] = Array.from(projectMap.values())
    .map((project) => {
      if (project.tags) {
        const scopes = project.tags.filter((tag: string) => tag.startsWith('scope:'));
        return scopes;
      }
      return [];
    })
    .reduce((acc, tags) => [...acc, ...tags], [])
    .map((scope: string) => scope.slice(6));

  // remove duplicates
  return Array.from(new Set(allScopes));
}

export async function utilLibGenerator(
  tree: Tree,
  options: UtilLibGeneratorSchema
) {
  await libraryGenerator(tree, {
    directory: `libs/${options.directory}/${options.name}`,
  });
  await formatFiles(tree);

  updateJson(tree, '/libs/internal-plugin/src/generators/util-lib/schema.json.json', (schemaJson) => {
    const scopes = getScopes(schemaJson.projectMap);

    schemaJson.properties.directory['x-prompt'].items = scopes.map((scope) => ({
      value: scope,
      label: scope,
    }));
    schemaJson.properties.directory.enums = scopes;

    return schemaJson;
  });
}

export default utilLibGenerator;
