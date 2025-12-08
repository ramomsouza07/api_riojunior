
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ResultadoMensal
 * 
 */
export type ResultadoMensal = $Result.DefaultSelection<Prisma.$ResultadoMensalPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resultadoMensal`: Exposes CRUD operations for the **ResultadoMensal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResultadoMensals
    * const resultadoMensals = await prisma.resultadoMensal.findMany()
    * ```
    */
  get resultadoMensal(): Prisma.ResultadoMensalDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ResultadoMensal: 'ResultadoMensal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "resultadoMensal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ResultadoMensal: {
        payload: Prisma.$ResultadoMensalPayload<ExtArgs>
        fields: Prisma.ResultadoMensalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultadoMensalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoMensalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultadoMensalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoMensalPayload>
          }
          findFirst: {
            args: Prisma.ResultadoMensalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoMensalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultadoMensalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoMensalPayload>
          }
          findMany: {
            args: Prisma.ResultadoMensalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoMensalPayload>[]
          }
          create: {
            args: Prisma.ResultadoMensalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoMensalPayload>
          }
          createMany: {
            args: Prisma.ResultadoMensalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResultadoMensalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoMensalPayload>
          }
          update: {
            args: Prisma.ResultadoMensalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoMensalPayload>
          }
          deleteMany: {
            args: Prisma.ResultadoMensalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResultadoMensalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResultadoMensalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoMensalPayload>
          }
          aggregate: {
            args: Prisma.ResultadoMensalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResultadoMensal>
          }
          groupBy: {
            args: Prisma.ResultadoMensalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultadoMensalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultadoMensalCountArgs<ExtArgs>
            result: $Utils.Optional<ResultadoMensalCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    resultadoMensal?: ResultadoMensalOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    resultados: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resultados?: boolean | UserCountOutputTypeCountResultadosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResultadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultadoMensalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    nome: string | null
    local: string | null
    email: string | null
    password: string | null
    faculdade: string | null
    federada: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    nome: string | null
    local: string | null
    email: string | null
    password: string | null
    faculdade: string | null
    federada: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    role: number
    nome: number
    local: number
    email: number
    password: number
    faculdade: number
    federada: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    role?: true
    nome?: true
    local?: true
    email?: true
    password?: true
    faculdade?: true
    federada?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    role?: true
    nome?: true
    local?: true
    email?: true
    password?: true
    faculdade?: true
    federada?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    role?: true
    nome?: true
    local?: true
    email?: true
    password?: true
    faculdade?: true
    federada?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    role: $Enums.Role
    nome: string
    local: string
    email: string
    password: string
    faculdade: string
    federada: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    nome?: boolean
    local?: boolean
    email?: boolean
    password?: boolean
    faculdade?: boolean
    federada?: boolean
    createdAt?: boolean
    resultados?: boolean | User$resultadosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    role?: boolean
    nome?: boolean
    local?: boolean
    email?: boolean
    password?: boolean
    faculdade?: boolean
    federada?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "nome" | "local" | "email" | "password" | "faculdade" | "federada" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resultados?: boolean | User$resultadosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      resultados: Prisma.$ResultadoMensalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.Role
      nome: string
      local: string
      email: string
      password: string
      faculdade: string
      federada: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resultados<T extends User$resultadosArgs<ExtArgs> = {}>(args?: Subset<T, User$resultadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadoMensalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly nome: FieldRef<"User", 'String'>
    readonly local: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly faculdade: FieldRef<"User", 'String'>
    readonly federada: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.resultados
   */
  export type User$resultadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoMensal
     */
    select?: ResultadoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoMensal
     */
    omit?: ResultadoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoMensalInclude<ExtArgs> | null
    where?: ResultadoMensalWhereInput
    orderBy?: ResultadoMensalOrderByWithRelationInput | ResultadoMensalOrderByWithRelationInput[]
    cursor?: ResultadoMensalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultadoMensalScalarFieldEnum | ResultadoMensalScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ResultadoMensal
   */

  export type AggregateResultadoMensal = {
    _count: ResultadoMensalCountAggregateOutputType | null
    _avg: ResultadoMensalAvgAggregateOutputType | null
    _sum: ResultadoMensalSumAggregateOutputType | null
    _min: ResultadoMensalMinAggregateOutputType | null
    _max: ResultadoMensalMaxAggregateOutputType | null
  }

  export type ResultadoMensalAvgAggregateOutputType = {
    numeroProjetos: number | null
    faturamento: Decimal | null
    numeroMembros: number | null
    csat: Decimal | null
    engajamentoMej: Decimal | null
    fatorColaborativo: Decimal | null
    indiceCluster: number | null
  }

  export type ResultadoMensalSumAggregateOutputType = {
    numeroProjetos: number | null
    faturamento: Decimal | null
    numeroMembros: number | null
    csat: Decimal | null
    engajamentoMej: Decimal | null
    fatorColaborativo: Decimal | null
    indiceCluster: number | null
  }

  export type ResultadoMensalMinAggregateOutputType = {
    id: string | null
    mesReferencia: Date | null
    numeroProjetos: number | null
    faturamento: Decimal | null
    numeroMembros: number | null
    csat: Decimal | null
    engajamentoMej: Decimal | null
    fatorColaborativo: Decimal | null
    indiceCluster: number | null
    empresaId: string | null
    createdAt: Date | null
  }

  export type ResultadoMensalMaxAggregateOutputType = {
    id: string | null
    mesReferencia: Date | null
    numeroProjetos: number | null
    faturamento: Decimal | null
    numeroMembros: number | null
    csat: Decimal | null
    engajamentoMej: Decimal | null
    fatorColaborativo: Decimal | null
    indiceCluster: number | null
    empresaId: string | null
    createdAt: Date | null
  }

  export type ResultadoMensalCountAggregateOutputType = {
    id: number
    mesReferencia: number
    numeroProjetos: number
    faturamento: number
    numeroMembros: number
    csat: number
    engajamentoMej: number
    fatorColaborativo: number
    indiceCluster: number
    empresaId: number
    createdAt: number
    _all: number
  }


  export type ResultadoMensalAvgAggregateInputType = {
    numeroProjetos?: true
    faturamento?: true
    numeroMembros?: true
    csat?: true
    engajamentoMej?: true
    fatorColaborativo?: true
    indiceCluster?: true
  }

  export type ResultadoMensalSumAggregateInputType = {
    numeroProjetos?: true
    faturamento?: true
    numeroMembros?: true
    csat?: true
    engajamentoMej?: true
    fatorColaborativo?: true
    indiceCluster?: true
  }

  export type ResultadoMensalMinAggregateInputType = {
    id?: true
    mesReferencia?: true
    numeroProjetos?: true
    faturamento?: true
    numeroMembros?: true
    csat?: true
    engajamentoMej?: true
    fatorColaborativo?: true
    indiceCluster?: true
    empresaId?: true
    createdAt?: true
  }

  export type ResultadoMensalMaxAggregateInputType = {
    id?: true
    mesReferencia?: true
    numeroProjetos?: true
    faturamento?: true
    numeroMembros?: true
    csat?: true
    engajamentoMej?: true
    fatorColaborativo?: true
    indiceCluster?: true
    empresaId?: true
    createdAt?: true
  }

  export type ResultadoMensalCountAggregateInputType = {
    id?: true
    mesReferencia?: true
    numeroProjetos?: true
    faturamento?: true
    numeroMembros?: true
    csat?: true
    engajamentoMej?: true
    fatorColaborativo?: true
    indiceCluster?: true
    empresaId?: true
    createdAt?: true
    _all?: true
  }

  export type ResultadoMensalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResultadoMensal to aggregate.
     */
    where?: ResultadoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResultadoMensals to fetch.
     */
    orderBy?: ResultadoMensalOrderByWithRelationInput | ResultadoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultadoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResultadoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResultadoMensals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResultadoMensals
    **/
    _count?: true | ResultadoMensalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultadoMensalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultadoMensalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultadoMensalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultadoMensalMaxAggregateInputType
  }

  export type GetResultadoMensalAggregateType<T extends ResultadoMensalAggregateArgs> = {
        [P in keyof T & keyof AggregateResultadoMensal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResultadoMensal[P]>
      : GetScalarType<T[P], AggregateResultadoMensal[P]>
  }




  export type ResultadoMensalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultadoMensalWhereInput
    orderBy?: ResultadoMensalOrderByWithAggregationInput | ResultadoMensalOrderByWithAggregationInput[]
    by: ResultadoMensalScalarFieldEnum[] | ResultadoMensalScalarFieldEnum
    having?: ResultadoMensalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultadoMensalCountAggregateInputType | true
    _avg?: ResultadoMensalAvgAggregateInputType
    _sum?: ResultadoMensalSumAggregateInputType
    _min?: ResultadoMensalMinAggregateInputType
    _max?: ResultadoMensalMaxAggregateInputType
  }

  export type ResultadoMensalGroupByOutputType = {
    id: string
    mesReferencia: Date
    numeroProjetos: number
    faturamento: Decimal
    numeroMembros: number
    csat: Decimal
    engajamentoMej: Decimal
    fatorColaborativo: Decimal
    indiceCluster: number
    empresaId: string
    createdAt: Date
    _count: ResultadoMensalCountAggregateOutputType | null
    _avg: ResultadoMensalAvgAggregateOutputType | null
    _sum: ResultadoMensalSumAggregateOutputType | null
    _min: ResultadoMensalMinAggregateOutputType | null
    _max: ResultadoMensalMaxAggregateOutputType | null
  }

  type GetResultadoMensalGroupByPayload<T extends ResultadoMensalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultadoMensalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultadoMensalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultadoMensalGroupByOutputType[P]>
            : GetScalarType<T[P], ResultadoMensalGroupByOutputType[P]>
        }
      >
    >


  export type ResultadoMensalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mesReferencia?: boolean
    numeroProjetos?: boolean
    faturamento?: boolean
    numeroMembros?: boolean
    csat?: boolean
    engajamentoMej?: boolean
    fatorColaborativo?: boolean
    indiceCluster?: boolean
    empresaId?: boolean
    createdAt?: boolean
    empresa?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultadoMensal"]>



  export type ResultadoMensalSelectScalar = {
    id?: boolean
    mesReferencia?: boolean
    numeroProjetos?: boolean
    faturamento?: boolean
    numeroMembros?: boolean
    csat?: boolean
    engajamentoMej?: boolean
    fatorColaborativo?: boolean
    indiceCluster?: boolean
    empresaId?: boolean
    createdAt?: boolean
  }

  export type ResultadoMensalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mesReferencia" | "numeroProjetos" | "faturamento" | "numeroMembros" | "csat" | "engajamentoMej" | "fatorColaborativo" | "indiceCluster" | "empresaId" | "createdAt", ExtArgs["result"]["resultadoMensal"]>
  export type ResultadoMensalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResultadoMensalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResultadoMensal"
    objects: {
      empresa: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mesReferencia: Date
      numeroProjetos: number
      faturamento: Prisma.Decimal
      numeroMembros: number
      csat: Prisma.Decimal
      engajamentoMej: Prisma.Decimal
      fatorColaborativo: Prisma.Decimal
      indiceCluster: number
      empresaId: string
      createdAt: Date
    }, ExtArgs["result"]["resultadoMensal"]>
    composites: {}
  }

  type ResultadoMensalGetPayload<S extends boolean | null | undefined | ResultadoMensalDefaultArgs> = $Result.GetResult<Prisma.$ResultadoMensalPayload, S>

  type ResultadoMensalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResultadoMensalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultadoMensalCountAggregateInputType | true
    }

  export interface ResultadoMensalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResultadoMensal'], meta: { name: 'ResultadoMensal' } }
    /**
     * Find zero or one ResultadoMensal that matches the filter.
     * @param {ResultadoMensalFindUniqueArgs} args - Arguments to find a ResultadoMensal
     * @example
     * // Get one ResultadoMensal
     * const resultadoMensal = await prisma.resultadoMensal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResultadoMensalFindUniqueArgs>(args: SelectSubset<T, ResultadoMensalFindUniqueArgs<ExtArgs>>): Prisma__ResultadoMensalClient<$Result.GetResult<Prisma.$ResultadoMensalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResultadoMensal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResultadoMensalFindUniqueOrThrowArgs} args - Arguments to find a ResultadoMensal
     * @example
     * // Get one ResultadoMensal
     * const resultadoMensal = await prisma.resultadoMensal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResultadoMensalFindUniqueOrThrowArgs>(args: SelectSubset<T, ResultadoMensalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResultadoMensalClient<$Result.GetResult<Prisma.$ResultadoMensalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResultadoMensal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoMensalFindFirstArgs} args - Arguments to find a ResultadoMensal
     * @example
     * // Get one ResultadoMensal
     * const resultadoMensal = await prisma.resultadoMensal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResultadoMensalFindFirstArgs>(args?: SelectSubset<T, ResultadoMensalFindFirstArgs<ExtArgs>>): Prisma__ResultadoMensalClient<$Result.GetResult<Prisma.$ResultadoMensalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResultadoMensal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoMensalFindFirstOrThrowArgs} args - Arguments to find a ResultadoMensal
     * @example
     * // Get one ResultadoMensal
     * const resultadoMensal = await prisma.resultadoMensal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResultadoMensalFindFirstOrThrowArgs>(args?: SelectSubset<T, ResultadoMensalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResultadoMensalClient<$Result.GetResult<Prisma.$ResultadoMensalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResultadoMensals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoMensalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResultadoMensals
     * const resultadoMensals = await prisma.resultadoMensal.findMany()
     * 
     * // Get first 10 ResultadoMensals
     * const resultadoMensals = await prisma.resultadoMensal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultadoMensalWithIdOnly = await prisma.resultadoMensal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResultadoMensalFindManyArgs>(args?: SelectSubset<T, ResultadoMensalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadoMensalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResultadoMensal.
     * @param {ResultadoMensalCreateArgs} args - Arguments to create a ResultadoMensal.
     * @example
     * // Create one ResultadoMensal
     * const ResultadoMensal = await prisma.resultadoMensal.create({
     *   data: {
     *     // ... data to create a ResultadoMensal
     *   }
     * })
     * 
     */
    create<T extends ResultadoMensalCreateArgs>(args: SelectSubset<T, ResultadoMensalCreateArgs<ExtArgs>>): Prisma__ResultadoMensalClient<$Result.GetResult<Prisma.$ResultadoMensalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResultadoMensals.
     * @param {ResultadoMensalCreateManyArgs} args - Arguments to create many ResultadoMensals.
     * @example
     * // Create many ResultadoMensals
     * const resultadoMensal = await prisma.resultadoMensal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResultadoMensalCreateManyArgs>(args?: SelectSubset<T, ResultadoMensalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ResultadoMensal.
     * @param {ResultadoMensalDeleteArgs} args - Arguments to delete one ResultadoMensal.
     * @example
     * // Delete one ResultadoMensal
     * const ResultadoMensal = await prisma.resultadoMensal.delete({
     *   where: {
     *     // ... filter to delete one ResultadoMensal
     *   }
     * })
     * 
     */
    delete<T extends ResultadoMensalDeleteArgs>(args: SelectSubset<T, ResultadoMensalDeleteArgs<ExtArgs>>): Prisma__ResultadoMensalClient<$Result.GetResult<Prisma.$ResultadoMensalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResultadoMensal.
     * @param {ResultadoMensalUpdateArgs} args - Arguments to update one ResultadoMensal.
     * @example
     * // Update one ResultadoMensal
     * const resultadoMensal = await prisma.resultadoMensal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResultadoMensalUpdateArgs>(args: SelectSubset<T, ResultadoMensalUpdateArgs<ExtArgs>>): Prisma__ResultadoMensalClient<$Result.GetResult<Prisma.$ResultadoMensalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResultadoMensals.
     * @param {ResultadoMensalDeleteManyArgs} args - Arguments to filter ResultadoMensals to delete.
     * @example
     * // Delete a few ResultadoMensals
     * const { count } = await prisma.resultadoMensal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResultadoMensalDeleteManyArgs>(args?: SelectSubset<T, ResultadoMensalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResultadoMensals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoMensalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResultadoMensals
     * const resultadoMensal = await prisma.resultadoMensal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResultadoMensalUpdateManyArgs>(args: SelectSubset<T, ResultadoMensalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResultadoMensal.
     * @param {ResultadoMensalUpsertArgs} args - Arguments to update or create a ResultadoMensal.
     * @example
     * // Update or create a ResultadoMensal
     * const resultadoMensal = await prisma.resultadoMensal.upsert({
     *   create: {
     *     // ... data to create a ResultadoMensal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResultadoMensal we want to update
     *   }
     * })
     */
    upsert<T extends ResultadoMensalUpsertArgs>(args: SelectSubset<T, ResultadoMensalUpsertArgs<ExtArgs>>): Prisma__ResultadoMensalClient<$Result.GetResult<Prisma.$ResultadoMensalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResultadoMensals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoMensalCountArgs} args - Arguments to filter ResultadoMensals to count.
     * @example
     * // Count the number of ResultadoMensals
     * const count = await prisma.resultadoMensal.count({
     *   where: {
     *     // ... the filter for the ResultadoMensals we want to count
     *   }
     * })
    **/
    count<T extends ResultadoMensalCountArgs>(
      args?: Subset<T, ResultadoMensalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultadoMensalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResultadoMensal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoMensalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResultadoMensalAggregateArgs>(args: Subset<T, ResultadoMensalAggregateArgs>): Prisma.PrismaPromise<GetResultadoMensalAggregateType<T>>

    /**
     * Group by ResultadoMensal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoMensalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResultadoMensalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultadoMensalGroupByArgs['orderBy'] }
        : { orderBy?: ResultadoMensalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResultadoMensalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultadoMensalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResultadoMensal model
   */
  readonly fields: ResultadoMensalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResultadoMensal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultadoMensalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResultadoMensal model
   */
  interface ResultadoMensalFieldRefs {
    readonly id: FieldRef<"ResultadoMensal", 'String'>
    readonly mesReferencia: FieldRef<"ResultadoMensal", 'DateTime'>
    readonly numeroProjetos: FieldRef<"ResultadoMensal", 'Int'>
    readonly faturamento: FieldRef<"ResultadoMensal", 'Decimal'>
    readonly numeroMembros: FieldRef<"ResultadoMensal", 'Int'>
    readonly csat: FieldRef<"ResultadoMensal", 'Decimal'>
    readonly engajamentoMej: FieldRef<"ResultadoMensal", 'Decimal'>
    readonly fatorColaborativo: FieldRef<"ResultadoMensal", 'Decimal'>
    readonly indiceCluster: FieldRef<"ResultadoMensal", 'Int'>
    readonly empresaId: FieldRef<"ResultadoMensal", 'String'>
    readonly createdAt: FieldRef<"ResultadoMensal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResultadoMensal findUnique
   */
  export type ResultadoMensalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoMensal
     */
    select?: ResultadoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoMensal
     */
    omit?: ResultadoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoMensalInclude<ExtArgs> | null
    /**
     * Filter, which ResultadoMensal to fetch.
     */
    where: ResultadoMensalWhereUniqueInput
  }

  /**
   * ResultadoMensal findUniqueOrThrow
   */
  export type ResultadoMensalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoMensal
     */
    select?: ResultadoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoMensal
     */
    omit?: ResultadoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoMensalInclude<ExtArgs> | null
    /**
     * Filter, which ResultadoMensal to fetch.
     */
    where: ResultadoMensalWhereUniqueInput
  }

  /**
   * ResultadoMensal findFirst
   */
  export type ResultadoMensalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoMensal
     */
    select?: ResultadoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoMensal
     */
    omit?: ResultadoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoMensalInclude<ExtArgs> | null
    /**
     * Filter, which ResultadoMensal to fetch.
     */
    where?: ResultadoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResultadoMensals to fetch.
     */
    orderBy?: ResultadoMensalOrderByWithRelationInput | ResultadoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResultadoMensals.
     */
    cursor?: ResultadoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResultadoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResultadoMensals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResultadoMensals.
     */
    distinct?: ResultadoMensalScalarFieldEnum | ResultadoMensalScalarFieldEnum[]
  }

  /**
   * ResultadoMensal findFirstOrThrow
   */
  export type ResultadoMensalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoMensal
     */
    select?: ResultadoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoMensal
     */
    omit?: ResultadoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoMensalInclude<ExtArgs> | null
    /**
     * Filter, which ResultadoMensal to fetch.
     */
    where?: ResultadoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResultadoMensals to fetch.
     */
    orderBy?: ResultadoMensalOrderByWithRelationInput | ResultadoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResultadoMensals.
     */
    cursor?: ResultadoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResultadoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResultadoMensals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResultadoMensals.
     */
    distinct?: ResultadoMensalScalarFieldEnum | ResultadoMensalScalarFieldEnum[]
  }

  /**
   * ResultadoMensal findMany
   */
  export type ResultadoMensalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoMensal
     */
    select?: ResultadoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoMensal
     */
    omit?: ResultadoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoMensalInclude<ExtArgs> | null
    /**
     * Filter, which ResultadoMensals to fetch.
     */
    where?: ResultadoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResultadoMensals to fetch.
     */
    orderBy?: ResultadoMensalOrderByWithRelationInput | ResultadoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResultadoMensals.
     */
    cursor?: ResultadoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResultadoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResultadoMensals.
     */
    skip?: number
    distinct?: ResultadoMensalScalarFieldEnum | ResultadoMensalScalarFieldEnum[]
  }

  /**
   * ResultadoMensal create
   */
  export type ResultadoMensalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoMensal
     */
    select?: ResultadoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoMensal
     */
    omit?: ResultadoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoMensalInclude<ExtArgs> | null
    /**
     * The data needed to create a ResultadoMensal.
     */
    data: XOR<ResultadoMensalCreateInput, ResultadoMensalUncheckedCreateInput>
  }

  /**
   * ResultadoMensal createMany
   */
  export type ResultadoMensalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResultadoMensals.
     */
    data: ResultadoMensalCreateManyInput | ResultadoMensalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResultadoMensal update
   */
  export type ResultadoMensalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoMensal
     */
    select?: ResultadoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoMensal
     */
    omit?: ResultadoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoMensalInclude<ExtArgs> | null
    /**
     * The data needed to update a ResultadoMensal.
     */
    data: XOR<ResultadoMensalUpdateInput, ResultadoMensalUncheckedUpdateInput>
    /**
     * Choose, which ResultadoMensal to update.
     */
    where: ResultadoMensalWhereUniqueInput
  }

  /**
   * ResultadoMensal updateMany
   */
  export type ResultadoMensalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResultadoMensals.
     */
    data: XOR<ResultadoMensalUpdateManyMutationInput, ResultadoMensalUncheckedUpdateManyInput>
    /**
     * Filter which ResultadoMensals to update
     */
    where?: ResultadoMensalWhereInput
    /**
     * Limit how many ResultadoMensals to update.
     */
    limit?: number
  }

  /**
   * ResultadoMensal upsert
   */
  export type ResultadoMensalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoMensal
     */
    select?: ResultadoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoMensal
     */
    omit?: ResultadoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoMensalInclude<ExtArgs> | null
    /**
     * The filter to search for the ResultadoMensal to update in case it exists.
     */
    where: ResultadoMensalWhereUniqueInput
    /**
     * In case the ResultadoMensal found by the `where` argument doesn't exist, create a new ResultadoMensal with this data.
     */
    create: XOR<ResultadoMensalCreateInput, ResultadoMensalUncheckedCreateInput>
    /**
     * In case the ResultadoMensal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultadoMensalUpdateInput, ResultadoMensalUncheckedUpdateInput>
  }

  /**
   * ResultadoMensal delete
   */
  export type ResultadoMensalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoMensal
     */
    select?: ResultadoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoMensal
     */
    omit?: ResultadoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoMensalInclude<ExtArgs> | null
    /**
     * Filter which ResultadoMensal to delete.
     */
    where: ResultadoMensalWhereUniqueInput
  }

  /**
   * ResultadoMensal deleteMany
   */
  export type ResultadoMensalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResultadoMensals to delete
     */
    where?: ResultadoMensalWhereInput
    /**
     * Limit how many ResultadoMensals to delete.
     */
    limit?: number
  }

  /**
   * ResultadoMensal without action
   */
  export type ResultadoMensalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoMensal
     */
    select?: ResultadoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoMensal
     */
    omit?: ResultadoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoMensalInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    role: 'role',
    nome: 'nome',
    local: 'local',
    email: 'email',
    password: 'password',
    faculdade: 'faculdade',
    federada: 'federada',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ResultadoMensalScalarFieldEnum: {
    id: 'id',
    mesReferencia: 'mesReferencia',
    numeroProjetos: 'numeroProjetos',
    faturamento: 'faturamento',
    numeroMembros: 'numeroMembros',
    csat: 'csat',
    engajamentoMej: 'engajamentoMej',
    fatorColaborativo: 'fatorColaborativo',
    indiceCluster: 'indiceCluster',
    empresaId: 'empresaId',
    createdAt: 'createdAt'
  };

  export type ResultadoMensalScalarFieldEnum = (typeof ResultadoMensalScalarFieldEnum)[keyof typeof ResultadoMensalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    local: 'local',
    email: 'email',
    password: 'password',
    faculdade: 'faculdade'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ResultadoMensalOrderByRelevanceFieldEnum: {
    id: 'id',
    empresaId: 'empresaId'
  };

  export type ResultadoMensalOrderByRelevanceFieldEnum = (typeof ResultadoMensalOrderByRelevanceFieldEnum)[keyof typeof ResultadoMensalOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    nome?: StringFilter<"User"> | string
    local?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    faculdade?: StringFilter<"User"> | string
    federada?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    resultados?: ResultadoMensalListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    nome?: SortOrder
    local?: SortOrder
    email?: SortOrder
    password?: SortOrder
    faculdade?: SortOrder
    federada?: SortOrder
    createdAt?: SortOrder
    resultados?: ResultadoMensalOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    nome?: StringFilter<"User"> | string
    local?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    faculdade?: StringFilter<"User"> | string
    federada?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    resultados?: ResultadoMensalListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    nome?: SortOrder
    local?: SortOrder
    email?: SortOrder
    password?: SortOrder
    faculdade?: SortOrder
    federada?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    nome?: StringWithAggregatesFilter<"User"> | string
    local?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    faculdade?: StringWithAggregatesFilter<"User"> | string
    federada?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ResultadoMensalWhereInput = {
    AND?: ResultadoMensalWhereInput | ResultadoMensalWhereInput[]
    OR?: ResultadoMensalWhereInput[]
    NOT?: ResultadoMensalWhereInput | ResultadoMensalWhereInput[]
    id?: StringFilter<"ResultadoMensal"> | string
    mesReferencia?: DateTimeFilter<"ResultadoMensal"> | Date | string
    numeroProjetos?: IntFilter<"ResultadoMensal"> | number
    faturamento?: DecimalFilter<"ResultadoMensal"> | Decimal | DecimalJsLike | number | string
    numeroMembros?: IntFilter<"ResultadoMensal"> | number
    csat?: DecimalFilter<"ResultadoMensal"> | Decimal | DecimalJsLike | number | string
    engajamentoMej?: DecimalFilter<"ResultadoMensal"> | Decimal | DecimalJsLike | number | string
    fatorColaborativo?: DecimalFilter<"ResultadoMensal"> | Decimal | DecimalJsLike | number | string
    indiceCluster?: IntFilter<"ResultadoMensal"> | number
    empresaId?: StringFilter<"ResultadoMensal"> | string
    createdAt?: DateTimeFilter<"ResultadoMensal"> | Date | string
    empresa?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ResultadoMensalOrderByWithRelationInput = {
    id?: SortOrder
    mesReferencia?: SortOrder
    numeroProjetos?: SortOrder
    faturamento?: SortOrder
    numeroMembros?: SortOrder
    csat?: SortOrder
    engajamentoMej?: SortOrder
    fatorColaborativo?: SortOrder
    indiceCluster?: SortOrder
    empresaId?: SortOrder
    createdAt?: SortOrder
    empresa?: UserOrderByWithRelationInput
    _relevance?: ResultadoMensalOrderByRelevanceInput
  }

  export type ResultadoMensalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    empresaId_mesReferencia?: ResultadoMensalEmpresaIdMesReferenciaCompoundUniqueInput
    AND?: ResultadoMensalWhereInput | ResultadoMensalWhereInput[]
    OR?: ResultadoMensalWhereInput[]
    NOT?: ResultadoMensalWhereInput | ResultadoMensalWhereInput[]
    mesReferencia?: DateTimeFilter<"ResultadoMensal"> | Date | string
    numeroProjetos?: IntFilter<"ResultadoMensal"> | number
    faturamento?: DecimalFilter<"ResultadoMensal"> | Decimal | DecimalJsLike | number | string
    numeroMembros?: IntFilter<"ResultadoMensal"> | number
    csat?: DecimalFilter<"ResultadoMensal"> | Decimal | DecimalJsLike | number | string
    engajamentoMej?: DecimalFilter<"ResultadoMensal"> | Decimal | DecimalJsLike | number | string
    fatorColaborativo?: DecimalFilter<"ResultadoMensal"> | Decimal | DecimalJsLike | number | string
    indiceCluster?: IntFilter<"ResultadoMensal"> | number
    empresaId?: StringFilter<"ResultadoMensal"> | string
    createdAt?: DateTimeFilter<"ResultadoMensal"> | Date | string
    empresa?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "empresaId_mesReferencia">

  export type ResultadoMensalOrderByWithAggregationInput = {
    id?: SortOrder
    mesReferencia?: SortOrder
    numeroProjetos?: SortOrder
    faturamento?: SortOrder
    numeroMembros?: SortOrder
    csat?: SortOrder
    engajamentoMej?: SortOrder
    fatorColaborativo?: SortOrder
    indiceCluster?: SortOrder
    empresaId?: SortOrder
    createdAt?: SortOrder
    _count?: ResultadoMensalCountOrderByAggregateInput
    _avg?: ResultadoMensalAvgOrderByAggregateInput
    _max?: ResultadoMensalMaxOrderByAggregateInput
    _min?: ResultadoMensalMinOrderByAggregateInput
    _sum?: ResultadoMensalSumOrderByAggregateInput
  }

  export type ResultadoMensalScalarWhereWithAggregatesInput = {
    AND?: ResultadoMensalScalarWhereWithAggregatesInput | ResultadoMensalScalarWhereWithAggregatesInput[]
    OR?: ResultadoMensalScalarWhereWithAggregatesInput[]
    NOT?: ResultadoMensalScalarWhereWithAggregatesInput | ResultadoMensalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResultadoMensal"> | string
    mesReferencia?: DateTimeWithAggregatesFilter<"ResultadoMensal"> | Date | string
    numeroProjetos?: IntWithAggregatesFilter<"ResultadoMensal"> | number
    faturamento?: DecimalWithAggregatesFilter<"ResultadoMensal"> | Decimal | DecimalJsLike | number | string
    numeroMembros?: IntWithAggregatesFilter<"ResultadoMensal"> | number
    csat?: DecimalWithAggregatesFilter<"ResultadoMensal"> | Decimal | DecimalJsLike | number | string
    engajamentoMej?: DecimalWithAggregatesFilter<"ResultadoMensal"> | Decimal | DecimalJsLike | number | string
    fatorColaborativo?: DecimalWithAggregatesFilter<"ResultadoMensal"> | Decimal | DecimalJsLike | number | string
    indiceCluster?: IntWithAggregatesFilter<"ResultadoMensal"> | number
    empresaId?: StringWithAggregatesFilter<"ResultadoMensal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ResultadoMensal"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    role?: $Enums.Role
    nome: string
    local: string
    email: string
    password: string
    faculdade: string
    federada?: boolean
    createdAt?: Date | string
    resultados?: ResultadoMensalCreateNestedManyWithoutEmpresaInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    role?: $Enums.Role
    nome: string
    local: string
    email: string
    password: string
    faculdade: string
    federada?: boolean
    createdAt?: Date | string
    resultados?: ResultadoMensalUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nome?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    faculdade?: StringFieldUpdateOperationsInput | string
    federada?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resultados?: ResultadoMensalUpdateManyWithoutEmpresaNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nome?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    faculdade?: StringFieldUpdateOperationsInput | string
    federada?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resultados?: ResultadoMensalUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    role?: $Enums.Role
    nome: string
    local: string
    email: string
    password: string
    faculdade: string
    federada?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nome?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    faculdade?: StringFieldUpdateOperationsInput | string
    federada?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nome?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    faculdade?: StringFieldUpdateOperationsInput | string
    federada?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoMensalCreateInput = {
    id?: string
    mesReferencia: Date | string
    numeroProjetos: number
    faturamento: Decimal | DecimalJsLike | number | string
    numeroMembros: number
    csat: Decimal | DecimalJsLike | number | string
    engajamentoMej: Decimal | DecimalJsLike | number | string
    fatorColaborativo: Decimal | DecimalJsLike | number | string
    indiceCluster: number
    createdAt?: Date | string
    empresa: UserCreateNestedOneWithoutResultadosInput
  }

  export type ResultadoMensalUncheckedCreateInput = {
    id?: string
    mesReferencia: Date | string
    numeroProjetos: number
    faturamento: Decimal | DecimalJsLike | number | string
    numeroMembros: number
    csat: Decimal | DecimalJsLike | number | string
    engajamentoMej: Decimal | DecimalJsLike | number | string
    fatorColaborativo: Decimal | DecimalJsLike | number | string
    indiceCluster: number
    empresaId: string
    createdAt?: Date | string
  }

  export type ResultadoMensalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroProjetos?: IntFieldUpdateOperationsInput | number
    faturamento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroMembros?: IntFieldUpdateOperationsInput | number
    csat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    engajamentoMej?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fatorColaborativo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    indiceCluster?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: UserUpdateOneRequiredWithoutResultadosNestedInput
  }

  export type ResultadoMensalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroProjetos?: IntFieldUpdateOperationsInput | number
    faturamento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroMembros?: IntFieldUpdateOperationsInput | number
    csat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    engajamentoMej?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fatorColaborativo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    indiceCluster?: IntFieldUpdateOperationsInput | number
    empresaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoMensalCreateManyInput = {
    id?: string
    mesReferencia: Date | string
    numeroProjetos: number
    faturamento: Decimal | DecimalJsLike | number | string
    numeroMembros: number
    csat: Decimal | DecimalJsLike | number | string
    engajamentoMej: Decimal | DecimalJsLike | number | string
    fatorColaborativo: Decimal | DecimalJsLike | number | string
    indiceCluster: number
    empresaId: string
    createdAt?: Date | string
  }

  export type ResultadoMensalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroProjetos?: IntFieldUpdateOperationsInput | number
    faturamento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroMembros?: IntFieldUpdateOperationsInput | number
    csat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    engajamentoMej?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fatorColaborativo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    indiceCluster?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoMensalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroProjetos?: IntFieldUpdateOperationsInput | number
    faturamento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroMembros?: IntFieldUpdateOperationsInput | number
    csat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    engajamentoMej?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fatorColaborativo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    indiceCluster?: IntFieldUpdateOperationsInput | number
    empresaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ResultadoMensalListRelationFilter = {
    every?: ResultadoMensalWhereInput
    some?: ResultadoMensalWhereInput
    none?: ResultadoMensalWhereInput
  }

  export type ResultadoMensalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    nome?: SortOrder
    local?: SortOrder
    email?: SortOrder
    password?: SortOrder
    faculdade?: SortOrder
    federada?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    nome?: SortOrder
    local?: SortOrder
    email?: SortOrder
    password?: SortOrder
    faculdade?: SortOrder
    federada?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    nome?: SortOrder
    local?: SortOrder
    email?: SortOrder
    password?: SortOrder
    faculdade?: SortOrder
    federada?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ResultadoMensalOrderByRelevanceInput = {
    fields: ResultadoMensalOrderByRelevanceFieldEnum | ResultadoMensalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ResultadoMensalEmpresaIdMesReferenciaCompoundUniqueInput = {
    empresaId: string
    mesReferencia: Date | string
  }

  export type ResultadoMensalCountOrderByAggregateInput = {
    id?: SortOrder
    mesReferencia?: SortOrder
    numeroProjetos?: SortOrder
    faturamento?: SortOrder
    numeroMembros?: SortOrder
    csat?: SortOrder
    engajamentoMej?: SortOrder
    fatorColaborativo?: SortOrder
    indiceCluster?: SortOrder
    empresaId?: SortOrder
    createdAt?: SortOrder
  }

  export type ResultadoMensalAvgOrderByAggregateInput = {
    numeroProjetos?: SortOrder
    faturamento?: SortOrder
    numeroMembros?: SortOrder
    csat?: SortOrder
    engajamentoMej?: SortOrder
    fatorColaborativo?: SortOrder
    indiceCluster?: SortOrder
  }

  export type ResultadoMensalMaxOrderByAggregateInput = {
    id?: SortOrder
    mesReferencia?: SortOrder
    numeroProjetos?: SortOrder
    faturamento?: SortOrder
    numeroMembros?: SortOrder
    csat?: SortOrder
    engajamentoMej?: SortOrder
    fatorColaborativo?: SortOrder
    indiceCluster?: SortOrder
    empresaId?: SortOrder
    createdAt?: SortOrder
  }

  export type ResultadoMensalMinOrderByAggregateInput = {
    id?: SortOrder
    mesReferencia?: SortOrder
    numeroProjetos?: SortOrder
    faturamento?: SortOrder
    numeroMembros?: SortOrder
    csat?: SortOrder
    engajamentoMej?: SortOrder
    fatorColaborativo?: SortOrder
    indiceCluster?: SortOrder
    empresaId?: SortOrder
    createdAt?: SortOrder
  }

  export type ResultadoMensalSumOrderByAggregateInput = {
    numeroProjetos?: SortOrder
    faturamento?: SortOrder
    numeroMembros?: SortOrder
    csat?: SortOrder
    engajamentoMej?: SortOrder
    fatorColaborativo?: SortOrder
    indiceCluster?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ResultadoMensalCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<ResultadoMensalCreateWithoutEmpresaInput, ResultadoMensalUncheckedCreateWithoutEmpresaInput> | ResultadoMensalCreateWithoutEmpresaInput[] | ResultadoMensalUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ResultadoMensalCreateOrConnectWithoutEmpresaInput | ResultadoMensalCreateOrConnectWithoutEmpresaInput[]
    createMany?: ResultadoMensalCreateManyEmpresaInputEnvelope
    connect?: ResultadoMensalWhereUniqueInput | ResultadoMensalWhereUniqueInput[]
  }

  export type ResultadoMensalUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<ResultadoMensalCreateWithoutEmpresaInput, ResultadoMensalUncheckedCreateWithoutEmpresaInput> | ResultadoMensalCreateWithoutEmpresaInput[] | ResultadoMensalUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ResultadoMensalCreateOrConnectWithoutEmpresaInput | ResultadoMensalCreateOrConnectWithoutEmpresaInput[]
    createMany?: ResultadoMensalCreateManyEmpresaInputEnvelope
    connect?: ResultadoMensalWhereUniqueInput | ResultadoMensalWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ResultadoMensalUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<ResultadoMensalCreateWithoutEmpresaInput, ResultadoMensalUncheckedCreateWithoutEmpresaInput> | ResultadoMensalCreateWithoutEmpresaInput[] | ResultadoMensalUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ResultadoMensalCreateOrConnectWithoutEmpresaInput | ResultadoMensalCreateOrConnectWithoutEmpresaInput[]
    upsert?: ResultadoMensalUpsertWithWhereUniqueWithoutEmpresaInput | ResultadoMensalUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: ResultadoMensalCreateManyEmpresaInputEnvelope
    set?: ResultadoMensalWhereUniqueInput | ResultadoMensalWhereUniqueInput[]
    disconnect?: ResultadoMensalWhereUniqueInput | ResultadoMensalWhereUniqueInput[]
    delete?: ResultadoMensalWhereUniqueInput | ResultadoMensalWhereUniqueInput[]
    connect?: ResultadoMensalWhereUniqueInput | ResultadoMensalWhereUniqueInput[]
    update?: ResultadoMensalUpdateWithWhereUniqueWithoutEmpresaInput | ResultadoMensalUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: ResultadoMensalUpdateManyWithWhereWithoutEmpresaInput | ResultadoMensalUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: ResultadoMensalScalarWhereInput | ResultadoMensalScalarWhereInput[]
  }

  export type ResultadoMensalUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<ResultadoMensalCreateWithoutEmpresaInput, ResultadoMensalUncheckedCreateWithoutEmpresaInput> | ResultadoMensalCreateWithoutEmpresaInput[] | ResultadoMensalUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ResultadoMensalCreateOrConnectWithoutEmpresaInput | ResultadoMensalCreateOrConnectWithoutEmpresaInput[]
    upsert?: ResultadoMensalUpsertWithWhereUniqueWithoutEmpresaInput | ResultadoMensalUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: ResultadoMensalCreateManyEmpresaInputEnvelope
    set?: ResultadoMensalWhereUniqueInput | ResultadoMensalWhereUniqueInput[]
    disconnect?: ResultadoMensalWhereUniqueInput | ResultadoMensalWhereUniqueInput[]
    delete?: ResultadoMensalWhereUniqueInput | ResultadoMensalWhereUniqueInput[]
    connect?: ResultadoMensalWhereUniqueInput | ResultadoMensalWhereUniqueInput[]
    update?: ResultadoMensalUpdateWithWhereUniqueWithoutEmpresaInput | ResultadoMensalUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: ResultadoMensalUpdateManyWithWhereWithoutEmpresaInput | ResultadoMensalUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: ResultadoMensalScalarWhereInput | ResultadoMensalScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutResultadosInput = {
    create?: XOR<UserCreateWithoutResultadosInput, UserUncheckedCreateWithoutResultadosInput>
    connectOrCreate?: UserCreateOrConnectWithoutResultadosInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutResultadosNestedInput = {
    create?: XOR<UserCreateWithoutResultadosInput, UserUncheckedCreateWithoutResultadosInput>
    connectOrCreate?: UserCreateOrConnectWithoutResultadosInput
    upsert?: UserUpsertWithoutResultadosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResultadosInput, UserUpdateWithoutResultadosInput>, UserUncheckedUpdateWithoutResultadosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ResultadoMensalCreateWithoutEmpresaInput = {
    id?: string
    mesReferencia: Date | string
    numeroProjetos: number
    faturamento: Decimal | DecimalJsLike | number | string
    numeroMembros: number
    csat: Decimal | DecimalJsLike | number | string
    engajamentoMej: Decimal | DecimalJsLike | number | string
    fatorColaborativo: Decimal | DecimalJsLike | number | string
    indiceCluster: number
    createdAt?: Date | string
  }

  export type ResultadoMensalUncheckedCreateWithoutEmpresaInput = {
    id?: string
    mesReferencia: Date | string
    numeroProjetos: number
    faturamento: Decimal | DecimalJsLike | number | string
    numeroMembros: number
    csat: Decimal | DecimalJsLike | number | string
    engajamentoMej: Decimal | DecimalJsLike | number | string
    fatorColaborativo: Decimal | DecimalJsLike | number | string
    indiceCluster: number
    createdAt?: Date | string
  }

  export type ResultadoMensalCreateOrConnectWithoutEmpresaInput = {
    where: ResultadoMensalWhereUniqueInput
    create: XOR<ResultadoMensalCreateWithoutEmpresaInput, ResultadoMensalUncheckedCreateWithoutEmpresaInput>
  }

  export type ResultadoMensalCreateManyEmpresaInputEnvelope = {
    data: ResultadoMensalCreateManyEmpresaInput | ResultadoMensalCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type ResultadoMensalUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: ResultadoMensalWhereUniqueInput
    update: XOR<ResultadoMensalUpdateWithoutEmpresaInput, ResultadoMensalUncheckedUpdateWithoutEmpresaInput>
    create: XOR<ResultadoMensalCreateWithoutEmpresaInput, ResultadoMensalUncheckedCreateWithoutEmpresaInput>
  }

  export type ResultadoMensalUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: ResultadoMensalWhereUniqueInput
    data: XOR<ResultadoMensalUpdateWithoutEmpresaInput, ResultadoMensalUncheckedUpdateWithoutEmpresaInput>
  }

  export type ResultadoMensalUpdateManyWithWhereWithoutEmpresaInput = {
    where: ResultadoMensalScalarWhereInput
    data: XOR<ResultadoMensalUpdateManyMutationInput, ResultadoMensalUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type ResultadoMensalScalarWhereInput = {
    AND?: ResultadoMensalScalarWhereInput | ResultadoMensalScalarWhereInput[]
    OR?: ResultadoMensalScalarWhereInput[]
    NOT?: ResultadoMensalScalarWhereInput | ResultadoMensalScalarWhereInput[]
    id?: StringFilter<"ResultadoMensal"> | string
    mesReferencia?: DateTimeFilter<"ResultadoMensal"> | Date | string
    numeroProjetos?: IntFilter<"ResultadoMensal"> | number
    faturamento?: DecimalFilter<"ResultadoMensal"> | Decimal | DecimalJsLike | number | string
    numeroMembros?: IntFilter<"ResultadoMensal"> | number
    csat?: DecimalFilter<"ResultadoMensal"> | Decimal | DecimalJsLike | number | string
    engajamentoMej?: DecimalFilter<"ResultadoMensal"> | Decimal | DecimalJsLike | number | string
    fatorColaborativo?: DecimalFilter<"ResultadoMensal"> | Decimal | DecimalJsLike | number | string
    indiceCluster?: IntFilter<"ResultadoMensal"> | number
    empresaId?: StringFilter<"ResultadoMensal"> | string
    createdAt?: DateTimeFilter<"ResultadoMensal"> | Date | string
  }

  export type UserCreateWithoutResultadosInput = {
    id?: string
    role?: $Enums.Role
    nome: string
    local: string
    email: string
    password: string
    faculdade: string
    federada?: boolean
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutResultadosInput = {
    id?: string
    role?: $Enums.Role
    nome: string
    local: string
    email: string
    password: string
    faculdade: string
    federada?: boolean
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutResultadosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResultadosInput, UserUncheckedCreateWithoutResultadosInput>
  }

  export type UserUpsertWithoutResultadosInput = {
    update: XOR<UserUpdateWithoutResultadosInput, UserUncheckedUpdateWithoutResultadosInput>
    create: XOR<UserCreateWithoutResultadosInput, UserUncheckedCreateWithoutResultadosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResultadosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResultadosInput, UserUncheckedUpdateWithoutResultadosInput>
  }

  export type UserUpdateWithoutResultadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nome?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    faculdade?: StringFieldUpdateOperationsInput | string
    federada?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutResultadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nome?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    faculdade?: StringFieldUpdateOperationsInput | string
    federada?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoMensalCreateManyEmpresaInput = {
    id?: string
    mesReferencia: Date | string
    numeroProjetos: number
    faturamento: Decimal | DecimalJsLike | number | string
    numeroMembros: number
    csat: Decimal | DecimalJsLike | number | string
    engajamentoMej: Decimal | DecimalJsLike | number | string
    fatorColaborativo: Decimal | DecimalJsLike | number | string
    indiceCluster: number
    createdAt?: Date | string
  }

  export type ResultadoMensalUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroProjetos?: IntFieldUpdateOperationsInput | number
    faturamento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroMembros?: IntFieldUpdateOperationsInput | number
    csat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    engajamentoMej?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fatorColaborativo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    indiceCluster?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoMensalUncheckedUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroProjetos?: IntFieldUpdateOperationsInput | number
    faturamento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroMembros?: IntFieldUpdateOperationsInput | number
    csat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    engajamentoMej?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fatorColaborativo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    indiceCluster?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoMensalUncheckedUpdateManyWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroProjetos?: IntFieldUpdateOperationsInput | number
    faturamento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroMembros?: IntFieldUpdateOperationsInput | number
    csat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    engajamentoMej?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fatorColaborativo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    indiceCluster?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}