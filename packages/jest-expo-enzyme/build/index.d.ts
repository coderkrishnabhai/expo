import { Config } from '@jest/types';
export default function withEnzyme(preset: Config.ProjectConfig): {
    setupFilesAfterEnv: string[];
    snapshotSerializers: string[];
    testEnvironmentOptions: {
        enzymeAdapter: string;
    };
    testEnvironment: string;
    automock: boolean;
    cache: boolean;
    cacheDirectory: string;
    clearMocks: boolean;
    coveragePathIgnorePatterns: string[];
    cwd: string;
    dependencyExtractor?: string | undefined;
    detectLeaks: boolean;
    detectOpenHandles: boolean;
    displayName?: Config.DisplayName | undefined;
    errorOnDeprecated: boolean;
    extensionsToTreatAsEsm: string[];
    extraGlobals: ("undefined" | "globalThis" | "eval" | "parseInt" | "parseFloat" | "isNaN" | "isFinite" | "decodeURI" | "decodeURIComponent" | "encodeURI" | "encodeURIComponent" | "escape" | "unescape" | "NaN" | "Infinity" | "Symbol" | "Object" | "Function" | "String" | "Boolean" | "Number" | "Math" | "Date" | "RegExp" | "Error" | "EvalError" | "RangeError" | "ReferenceError" | "SyntaxError" | "TypeError" | "URIError" | "JSON" | "Array" | "Promise" | "ArrayBuffer" | "DataView" | "Int8Array" | "Uint8Array" | "Uint8ClampedArray" | "Int16Array" | "Uint16Array" | "Int32Array" | "Uint32Array" | "Float32Array" | "Float64Array" | "Intl" | "Map" | "WeakMap" | "Set" | "WeakSet" | "Proxy" | "Reflect" | "SharedArrayBuffer" | "Atomics" | "BigInt" | "BigInt64Array" | "BigUint64Array" | "assert" | "node:assert" | "assert/strict" | "node:assert/strict" | "structuredClone" | "process" | "console" | "__filename" | "__dirname" | "require" | "module" | "exports" | "gc" | "AbortController" | "AbortSignal" | "async_hooks" | "node:async_hooks" | "buffer" | "node:buffer" | "child_process" | "node:child_process" | "cluster" | "node:cluster" | "node:console" | "constants" | "node:constants" | "crypto" | "node:crypto" | "dgram" | "node:dgram" | "diagnostics_channel" | "node:diagnostics_channel" | "dns" | "node:dns" | "dns/promises" | "node:dns/promises" | "domain" | "node:domain" | "events" | "node:events" | "fs" | "node:fs" | "fs/promises" | "node:fs/promises" | "http" | "node:http" | "http2" | "node:http2" | "https" | "node:https" | "inspector" | "node:inspector" | "node:module" | "net" | "node:net" | "os" | "node:os" | "path/posix" | "path/win32" | "path" | "node:path" | "node:path/posix" | "node:path/win32" | "perf_hooks" | "node:perf_hooks" | "node:process" | "punycode" | "node:punycode" | "querystring" | "node:querystring" | "readline" | "node:readline" | "repl" | "node:repl" | "stream" | "node:stream" | "stream/promises" | "node:stream/promises" | "Blob" | "stream/consumers" | "node:stream/consumers" | "stream/web" | "node:stream/web" | "string_decoder" | "node:string_decoder" | "timers" | "node:timers" | "timers/promises" | "node:timers/promises" | "tls" | "node:tls" | "trace_events" | "node:trace_events" | "tty" | "node:tty" | "url" | "node:url" | "util" | "util/types" | "node:util" | "node:util/types" | "v8" | "node:v8" | "vm" | "node:vm" | "wasi" | "node:wasi" | "worker_threads" | "node:worker_threads" | "zlib" | "node:zlib" | "global" | "React" | "clearInterval" | "clearTimeout" | "setInterval" | "setTimeout" | "clearImmediate" | "setImmediate" | "cancelAnimationFrame" | "requestAnimationFrame" | "fetchBundle" | "fetch" | "Headers" | "Request" | "Response" | "XMLHttpRequest" | "XMLHttpRequestUpload" | "WebSocket" | "FileReader" | "react-native/Libraries/BatchedBridge/BatchedBridge" | "react-native/Libraries/BatchedBridge/MessageQueue" | "react-native/Libraries/Utilities/codegenNativeCommands" | "react-native/Libraries/Utilities/codegenNativeComponent" | "react-native/Libraries/Types/CodegenTypes" | "react-native/Libraries/Core/Devtools/parseErrorStack" | "react-native/Libraries/Core/Devtools/symbolicateStackTrace" | "react-native/Libraries/NewAppScreen" | "atob" | "btoa" | "Buffer" | "queueMicrotask")[];
    filter?: string | undefined;
    forceCoverageMatch: string[];
    globalSetup?: string | undefined;
    globalTeardown?: string | undefined;
    globals: Config.ConfigGlobals;
    haste: Config.HasteConfig;
    injectGlobals: boolean;
    moduleDirectories: string[];
    moduleFileExtensions: string[];
    moduleLoader?: string | undefined;
    moduleNameMapper: [string, string][];
    modulePathIgnorePatterns: string[];
    modulePaths?: string[] | undefined;
    name: string;
    prettierPath: string;
    resetMocks: boolean;
    resetModules: boolean;
    resolver?: string | undefined;
    restoreMocks: boolean;
    rootDir: string;
    roots: string[];
    runner: string;
    setupFiles: string[];
    skipFilter: boolean;
    skipNodeResolution?: boolean | undefined;
    slowTestThreshold: number;
    snapshotResolver?: string | undefined;
    snapshotFormat: Config.PrettyFormatOptions;
    testMatch: string[];
    testLocationInResults: boolean;
    testPathIgnorePatterns: string[];
    testRegex: (string | RegExp)[];
    testRunner: string;
    testURL: string;
    timers: "real" | "fake" | "modern" | "legacy";
    transform: [string, string, Record<string, unknown>][];
    transformIgnorePatterns: string[];
    watchPathIgnorePatterns: string[];
    unmockedModulePathPatterns?: string[] | undefined;
} | undefined;
export { withEnzyme };
//# sourceMappingURL=index.d.ts.map