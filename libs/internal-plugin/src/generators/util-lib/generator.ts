import {
  formatFiles,
  Tree,
} from '@nx/devkit';
import { UtilLibGeneratorSchema } from './schema';
import { libraryGenerator } from '@nx/js';

export async function utilLibGenerator(
  tree: Tree,
  options: UtilLibGeneratorSchema
) {
  await libraryGenerator(tree, {
    directory: `libs/${options.directory}/${options.name}`,
  });
  await formatFiles(tree);
}

export default utilLibGenerator;
