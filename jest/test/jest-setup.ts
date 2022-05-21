// @types/jest-image-snapshotをインストールすることによりTypeScriptでもjest-image-snapshotを参照できます。
import { toMatchImageSnapshot } from 'jest-image-snapshot';

// Jestのsetup時にtoMatchImageSnapshotを使用できるようにします。
expect.extend({ toMatchImageSnapshot });
