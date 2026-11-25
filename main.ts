// One Line entry: writes one funny line to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Some jokes arrive by committee; this one just took the scenic route through three inboxes.
const line = 'I asked my agent for one joke. It outsourced it to three other agents and invoiced me for the laugh.';

mkdirSync(outDir, { recursive: true });
// The joke is already written, so this last step just gives it a proper envelope.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
