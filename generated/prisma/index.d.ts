
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
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Stores
 * 
 */
export type Stores = $Result.DefaultSelection<Prisma.$StoresPayload>
/**
 * Model StoreInventory
 * 
 */
export type StoreInventory = $Result.DefaultSelection<Prisma.$StoreInventoryPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Vouchers
 * 
 */
export type Vouchers = $Result.DefaultSelection<Prisma.$VouchersPayload>
/**
 * Model UserVouchers
 * 
 */
export type UserVouchers = $Result.DefaultSelection<Prisma.$UserVouchersPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model OrderItems
 * 
 */
export type OrderItems = $Result.DefaultSelection<Prisma.$OrderItemsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const HousingType: {
  PRIVATE_HOUSE: 'PRIVATE_HOUSE',
  COMPANY: 'COMPANY'
};

export type HousingType = (typeof HousingType)[keyof typeof HousingType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type HousingType = $Enums.HousingType

export const HousingType: typeof $Enums.HousingType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stores`: Exposes CRUD operations for the **Stores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.stores.findMany()
    * ```
    */
  get stores(): Prisma.StoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storeInventory`: Exposes CRUD operations for the **StoreInventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreInventories
    * const storeInventories = await prisma.storeInventory.findMany()
    * ```
    */
  get storeInventory(): Prisma.StoreInventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vouchers`: Exposes CRUD operations for the **Vouchers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.vouchers.findMany()
    * ```
    */
  get vouchers(): Prisma.VouchersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userVouchers`: Exposes CRUD operations for the **UserVouchers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserVouchers
    * const userVouchers = await prisma.userVouchers.findMany()
    * ```
    */
  get userVouchers(): Prisma.UserVouchersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItems`: Exposes CRUD operations for the **OrderItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItems.findMany()
    * ```
    */
  get orderItems(): Prisma.OrderItemsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Categories: 'Categories',
    Products: 'Products',
    Stores: 'Stores',
    StoreInventory: 'StoreInventory',
    Users: 'Users',
    Vouchers: 'Vouchers',
    UserVouchers: 'UserVouchers',
    Orders: 'Orders',
    OrderItems: 'OrderItems'
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
      modelProps: "categories" | "products" | "stores" | "storeInventory" | "users" | "vouchers" | "userVouchers" | "orders" | "orderItems"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Stores: {
        payload: Prisma.$StoresPayload<ExtArgs>
        fields: Prisma.StoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoresPayload>
          }
          findFirst: {
            args: Prisma.StoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoresPayload>
          }
          findMany: {
            args: Prisma.StoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoresPayload>[]
          }
          create: {
            args: Prisma.StoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoresPayload>
          }
          createMany: {
            args: Prisma.StoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoresPayload>[]
          }
          delete: {
            args: Prisma.StoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoresPayload>
          }
          update: {
            args: Prisma.StoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoresPayload>
          }
          deleteMany: {
            args: Prisma.StoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoresPayload>[]
          }
          upsert: {
            args: Prisma.StoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoresPayload>
          }
          aggregate: {
            args: Prisma.StoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStores>
          }
          groupBy: {
            args: Prisma.StoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoresCountArgs<ExtArgs>
            result: $Utils.Optional<StoresCountAggregateOutputType> | number
          }
        }
      }
      StoreInventory: {
        payload: Prisma.$StoreInventoryPayload<ExtArgs>
        fields: Prisma.StoreInventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreInventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreInventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreInventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreInventoryPayload>
          }
          findFirst: {
            args: Prisma.StoreInventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreInventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreInventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreInventoryPayload>
          }
          findMany: {
            args: Prisma.StoreInventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreInventoryPayload>[]
          }
          create: {
            args: Prisma.StoreInventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreInventoryPayload>
          }
          createMany: {
            args: Prisma.StoreInventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreInventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreInventoryPayload>[]
          }
          delete: {
            args: Prisma.StoreInventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreInventoryPayload>
          }
          update: {
            args: Prisma.StoreInventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreInventoryPayload>
          }
          deleteMany: {
            args: Prisma.StoreInventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreInventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoreInventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreInventoryPayload>[]
          }
          upsert: {
            args: Prisma.StoreInventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreInventoryPayload>
          }
          aggregate: {
            args: Prisma.StoreInventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreInventory>
          }
          groupBy: {
            args: Prisma.StoreInventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreInventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreInventoryCountArgs<ExtArgs>
            result: $Utils.Optional<StoreInventoryCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Vouchers: {
        payload: Prisma.$VouchersPayload<ExtArgs>
        fields: Prisma.VouchersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VouchersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VouchersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload>
          }
          findFirst: {
            args: Prisma.VouchersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VouchersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload>
          }
          findMany: {
            args: Prisma.VouchersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload>[]
          }
          create: {
            args: Prisma.VouchersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload>
          }
          createMany: {
            args: Prisma.VouchersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VouchersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload>[]
          }
          delete: {
            args: Prisma.VouchersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload>
          }
          update: {
            args: Prisma.VouchersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload>
          }
          deleteMany: {
            args: Prisma.VouchersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VouchersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VouchersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload>[]
          }
          upsert: {
            args: Prisma.VouchersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload>
          }
          aggregate: {
            args: Prisma.VouchersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVouchers>
          }
          groupBy: {
            args: Prisma.VouchersGroupByArgs<ExtArgs>
            result: $Utils.Optional<VouchersGroupByOutputType>[]
          }
          count: {
            args: Prisma.VouchersCountArgs<ExtArgs>
            result: $Utils.Optional<VouchersCountAggregateOutputType> | number
          }
        }
      }
      UserVouchers: {
        payload: Prisma.$UserVouchersPayload<ExtArgs>
        fields: Prisma.UserVouchersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserVouchersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVouchersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserVouchersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVouchersPayload>
          }
          findFirst: {
            args: Prisma.UserVouchersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVouchersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserVouchersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVouchersPayload>
          }
          findMany: {
            args: Prisma.UserVouchersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVouchersPayload>[]
          }
          create: {
            args: Prisma.UserVouchersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVouchersPayload>
          }
          createMany: {
            args: Prisma.UserVouchersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserVouchersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVouchersPayload>[]
          }
          delete: {
            args: Prisma.UserVouchersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVouchersPayload>
          }
          update: {
            args: Prisma.UserVouchersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVouchersPayload>
          }
          deleteMany: {
            args: Prisma.UserVouchersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserVouchersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserVouchersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVouchersPayload>[]
          }
          upsert: {
            args: Prisma.UserVouchersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVouchersPayload>
          }
          aggregate: {
            args: Prisma.UserVouchersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserVouchers>
          }
          groupBy: {
            args: Prisma.UserVouchersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserVouchersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserVouchersCountArgs<ExtArgs>
            result: $Utils.Optional<UserVouchersCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      OrderItems: {
        payload: Prisma.$OrderItemsPayload<ExtArgs>
        fields: Prisma.OrderItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          findFirst: {
            args: Prisma.OrderItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          findMany: {
            args: Prisma.OrderItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>[]
          }
          create: {
            args: Prisma.OrderItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          createMany: {
            args: Prisma.OrderItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>[]
          }
          delete: {
            args: Prisma.OrderItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          update: {
            args: Prisma.OrderItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          aggregate: {
            args: Prisma.OrderItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItems>
          }
          groupBy: {
            args: Prisma.OrderItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemsCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    categories?: CategoriesOmit
    products?: ProductsOmit
    stores?: StoresOmit
    storeInventory?: StoreInventoryOmit
    users?: UsersOmit
    vouchers?: VouchersOmit
    userVouchers?: UserVouchersOmit
    orders?: OrdersOmit
    orderItems?: OrderItemsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    inventories: number
    order_items: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | ProductsCountOutputTypeCountInventoriesArgs
    order_items?: boolean | ProductsCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountInventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreInventoryWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
  }


  /**
   * Count Type StoresCountOutputType
   */

  export type StoresCountOutputType = {
    inventories: number
  }

  export type StoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | StoresCountOutputTypeCountInventoriesArgs
  }

  // Custom InputTypes
  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoresCountOutputType
     */
    select?: StoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeCountInventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreInventoryWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    vouchers: number
    orders: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vouchers?: boolean | UsersCountOutputTypeCountVouchersArgs
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountVouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVouchersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Count Type VouchersCountOutputType
   */

  export type VouchersCountOutputType = {
    user_vouchers: number
  }

  export type VouchersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_vouchers?: boolean | VouchersCountOutputTypeCountUser_vouchersArgs
  }

  // Custom InputTypes
  /**
   * VouchersCountOutputType without action
   */
  export type VouchersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VouchersCountOutputType
     */
    select?: VouchersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VouchersCountOutputType without action
   */
  export type VouchersCountOutputTypeCountUser_vouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVouchersWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_items: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    category_name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    category_name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    category_name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    category_name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    category_name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    category_name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    category_name: string
    createdAt: Date
    updatedAt: Date
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | Categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    category_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category_name" | "createdAt" | "updatedAt", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category_name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Categories$productsArgs<ExtArgs> = {}>(args?: Subset<T, Categories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'Int'>
    readonly category_name: FieldRef<"Categories", 'String'>
    readonly createdAt: FieldRef<"Categories", 'DateTime'>
    readonly updatedAt: FieldRef<"Categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.products
   */
  export type Categories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    category_id: number | null
    discount_percentage: Decimal | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    category_id: number | null
    discount_percentage: Decimal | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    size: string | null
    color: string | null
    description: string | null
    category_id: number | null
    discount_percentage: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    size: string | null
    color: string | null
    description: string | null
    category_id: number | null
    discount_percentage: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    price: number
    size: number
    color: number
    description: number
    category_id: number
    discount_percentage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    price?: true
    category_id?: true
    discount_percentage?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    price?: true
    category_id?: true
    discount_percentage?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    size?: true
    color?: true
    description?: true
    category_id?: true
    discount_percentage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    size?: true
    color?: true
    description?: true
    category_id?: true
    discount_percentage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    size?: true
    color?: true
    description?: true
    category_id?: true
    discount_percentage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    name: string
    price: Decimal
    size: string | null
    color: string | null
    description: string | null
    category_id: number
    discount_percentage: Decimal
    createdAt: Date
    updatedAt: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    size?: boolean
    color?: boolean
    description?: boolean
    category_id?: boolean
    discount_percentage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    inventories?: boolean | Products$inventoriesArgs<ExtArgs>
    order_items?: boolean | Products$order_itemsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    size?: boolean
    color?: boolean
    description?: boolean
    category_id?: boolean
    discount_percentage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    size?: boolean
    color?: boolean
    description?: boolean
    category_id?: boolean
    discount_percentage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    size?: boolean
    color?: boolean
    description?: boolean
    category_id?: boolean
    discount_percentage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "size" | "color" | "description" | "category_id" | "discount_percentage" | "createdAt" | "updatedAt", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    inventories?: boolean | Products$inventoriesArgs<ExtArgs>
    order_items?: boolean | Products$order_itemsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      category: Prisma.$CategoriesPayload<ExtArgs>
      inventories: Prisma.$StoreInventoryPayload<ExtArgs>[]
      order_items: Prisma.$OrderItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: Prisma.Decimal
      size: string | null
      color: string | null
      description: string | null
      category_id: number
      discount_percentage: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
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
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inventories<T extends Products$inventoriesArgs<ExtArgs> = {}>(args?: Subset<T, Products$inventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_items<T extends Products$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Products$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly id: FieldRef<"Products", 'Int'>
    readonly name: FieldRef<"Products", 'String'>
    readonly price: FieldRef<"Products", 'Decimal'>
    readonly size: FieldRef<"Products", 'String'>
    readonly color: FieldRef<"Products", 'String'>
    readonly description: FieldRef<"Products", 'String'>
    readonly category_id: FieldRef<"Products", 'Int'>
    readonly discount_percentage: FieldRef<"Products", 'Decimal'>
    readonly createdAt: FieldRef<"Products", 'DateTime'>
    readonly updatedAt: FieldRef<"Products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.inventories
   */
  export type Products$inventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreInventory
     */
    select?: StoreInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreInventory
     */
    omit?: StoreInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInventoryInclude<ExtArgs> | null
    where?: StoreInventoryWhereInput
    orderBy?: StoreInventoryOrderByWithRelationInput | StoreInventoryOrderByWithRelationInput[]
    cursor?: StoreInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreInventoryScalarFieldEnum | StoreInventoryScalarFieldEnum[]
  }

  /**
   * Products.order_items
   */
  export type Products$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    cursor?: OrderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model Stores
   */

  export type AggregateStores = {
    _count: StoresCountAggregateOutputType | null
    _avg: StoresAvgAggregateOutputType | null
    _sum: StoresSumAggregateOutputType | null
    _min: StoresMinAggregateOutputType | null
    _max: StoresMaxAggregateOutputType | null
  }

  export type StoresAvgAggregateOutputType = {
    id: number | null
  }

  export type StoresSumAggregateOutputType = {
    id: number | null
  }

  export type StoresMinAggregateOutputType = {
    id: number | null
    store_name: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoresMaxAggregateOutputType = {
    id: number | null
    store_name: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoresCountAggregateOutputType = {
    id: number
    store_name: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoresAvgAggregateInputType = {
    id?: true
  }

  export type StoresSumAggregateInputType = {
    id?: true
  }

  export type StoresMinAggregateInputType = {
    id?: true
    store_name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoresMaxAggregateInputType = {
    id?: true
    store_name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoresCountAggregateInputType = {
    id?: true
    store_name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to aggregate.
     */
    where?: StoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoresOrderByWithRelationInput | StoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoresMaxAggregateInputType
  }

  export type GetStoresAggregateType<T extends StoresAggregateArgs> = {
        [P in keyof T & keyof AggregateStores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStores[P]>
      : GetScalarType<T[P], AggregateStores[P]>
  }




  export type StoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoresWhereInput
    orderBy?: StoresOrderByWithAggregationInput | StoresOrderByWithAggregationInput[]
    by: StoresScalarFieldEnum[] | StoresScalarFieldEnum
    having?: StoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoresCountAggregateInputType | true
    _avg?: StoresAvgAggregateInputType
    _sum?: StoresSumAggregateInputType
    _min?: StoresMinAggregateInputType
    _max?: StoresMaxAggregateInputType
  }

  export type StoresGroupByOutputType = {
    id: number
    store_name: string
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: StoresCountAggregateOutputType | null
    _avg: StoresAvgAggregateOutputType | null
    _sum: StoresSumAggregateOutputType | null
    _min: StoresMinAggregateOutputType | null
    _max: StoresMaxAggregateOutputType | null
  }

  type GetStoresGroupByPayload<T extends StoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoresGroupByOutputType[P]>
            : GetScalarType<T[P], StoresGroupByOutputType[P]>
        }
      >
    >


  export type StoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    store_name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventories?: boolean | Stores$inventoriesArgs<ExtArgs>
    _count?: boolean | StoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stores"]>

  export type StoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    store_name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stores"]>

  export type StoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    store_name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stores"]>

  export type StoresSelectScalar = {
    id?: boolean
    store_name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "store_name" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["stores"]>
  export type StoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | Stores$inventoriesArgs<ExtArgs>
    _count?: boolean | StoresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stores"
    objects: {
      inventories: Prisma.$StoreInventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      store_name: string
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stores"]>
    composites: {}
  }

  type StoresGetPayload<S extends boolean | null | undefined | StoresDefaultArgs> = $Result.GetResult<Prisma.$StoresPayload, S>

  type StoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoresCountAggregateInputType | true
    }

  export interface StoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stores'], meta: { name: 'Stores' } }
    /**
     * Find zero or one Stores that matches the filter.
     * @param {StoresFindUniqueArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoresFindUniqueArgs>(args: SelectSubset<T, StoresFindUniqueArgs<ExtArgs>>): Prisma__StoresClient<$Result.GetResult<Prisma.$StoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoresFindUniqueOrThrowArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoresFindUniqueOrThrowArgs>(args: SelectSubset<T, StoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoresClient<$Result.GetResult<Prisma.$StoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoresFindFirstArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoresFindFirstArgs>(args?: SelectSubset<T, StoresFindFirstArgs<ExtArgs>>): Prisma__StoresClient<$Result.GetResult<Prisma.$StoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoresFindFirstOrThrowArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoresFindFirstOrThrowArgs>(args?: SelectSubset<T, StoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoresClient<$Result.GetResult<Prisma.$StoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.stores.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.stores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storesWithIdOnly = await prisma.stores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoresFindManyArgs>(args?: SelectSubset<T, StoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stores.
     * @param {StoresCreateArgs} args - Arguments to create a Stores.
     * @example
     * // Create one Stores
     * const Stores = await prisma.stores.create({
     *   data: {
     *     // ... data to create a Stores
     *   }
     * })
     * 
     */
    create<T extends StoresCreateArgs>(args: SelectSubset<T, StoresCreateArgs<ExtArgs>>): Prisma__StoresClient<$Result.GetResult<Prisma.$StoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {StoresCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const stores = await prisma.stores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoresCreateManyArgs>(args?: SelectSubset<T, StoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {StoresCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const stores = await prisma.stores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `id`
     * const storesWithIdOnly = await prisma.stores.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoresCreateManyAndReturnArgs>(args?: SelectSubset<T, StoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stores.
     * @param {StoresDeleteArgs} args - Arguments to delete one Stores.
     * @example
     * // Delete one Stores
     * const Stores = await prisma.stores.delete({
     *   where: {
     *     // ... filter to delete one Stores
     *   }
     * })
     * 
     */
    delete<T extends StoresDeleteArgs>(args: SelectSubset<T, StoresDeleteArgs<ExtArgs>>): Prisma__StoresClient<$Result.GetResult<Prisma.$StoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stores.
     * @param {StoresUpdateArgs} args - Arguments to update one Stores.
     * @example
     * // Update one Stores
     * const stores = await prisma.stores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoresUpdateArgs>(args: SelectSubset<T, StoresUpdateArgs<ExtArgs>>): Prisma__StoresClient<$Result.GetResult<Prisma.$StoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {StoresDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.stores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoresDeleteManyArgs>(args?: SelectSubset<T, StoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const stores = await prisma.stores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoresUpdateManyArgs>(args: SelectSubset<T, StoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores and returns the data updated in the database.
     * @param {StoresUpdateManyAndReturnArgs} args - Arguments to update many Stores.
     * @example
     * // Update many Stores
     * const stores = await prisma.stores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stores and only return the `id`
     * const storesWithIdOnly = await prisma.stores.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StoresUpdateManyAndReturnArgs>(args: SelectSubset<T, StoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stores.
     * @param {StoresUpsertArgs} args - Arguments to update or create a Stores.
     * @example
     * // Update or create a Stores
     * const stores = await prisma.stores.upsert({
     *   create: {
     *     // ... data to create a Stores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stores we want to update
     *   }
     * })
     */
    upsert<T extends StoresUpsertArgs>(args: SelectSubset<T, StoresUpsertArgs<ExtArgs>>): Prisma__StoresClient<$Result.GetResult<Prisma.$StoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoresCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.stores.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoresCountArgs>(
      args?: Subset<T, StoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoresAggregateArgs>(args: Subset<T, StoresAggregateArgs>): Prisma.PrismaPromise<GetStoresAggregateType<T>>

    /**
     * Group by Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoresGroupByArgs} args - Group by arguments.
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
      T extends StoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoresGroupByArgs['orderBy'] }
        : { orderBy?: StoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stores model
   */
  readonly fields: StoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventories<T extends Stores$inventoriesArgs<ExtArgs> = {}>(args?: Subset<T, Stores$inventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Stores model
   */
  interface StoresFieldRefs {
    readonly id: FieldRef<"Stores", 'Int'>
    readonly store_name: FieldRef<"Stores", 'String'>
    readonly address: FieldRef<"Stores", 'String'>
    readonly createdAt: FieldRef<"Stores", 'DateTime'>
    readonly updatedAt: FieldRef<"Stores", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stores findUnique
   */
  export type StoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stores
     */
    select?: StoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stores
     */
    omit?: StoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoresInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where: StoresWhereUniqueInput
  }

  /**
   * Stores findUniqueOrThrow
   */
  export type StoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stores
     */
    select?: StoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stores
     */
    omit?: StoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoresInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where: StoresWhereUniqueInput
  }

  /**
   * Stores findFirst
   */
  export type StoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stores
     */
    select?: StoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stores
     */
    omit?: StoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoresInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoresOrderByWithRelationInput | StoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * Stores findFirstOrThrow
   */
  export type StoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stores
     */
    select?: StoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stores
     */
    omit?: StoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoresInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoresOrderByWithRelationInput | StoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * Stores findMany
   */
  export type StoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stores
     */
    select?: StoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stores
     */
    omit?: StoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoresInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoresOrderByWithRelationInput | StoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * Stores create
   */
  export type StoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stores
     */
    select?: StoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stores
     */
    omit?: StoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoresInclude<ExtArgs> | null
    /**
     * The data needed to create a Stores.
     */
    data: XOR<StoresCreateInput, StoresUncheckedCreateInput>
  }

  /**
   * Stores createMany
   */
  export type StoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoresCreateManyInput | StoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stores createManyAndReturn
   */
  export type StoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stores
     */
    select?: StoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stores
     */
    omit?: StoresOmit<ExtArgs> | null
    /**
     * The data used to create many Stores.
     */
    data: StoresCreateManyInput | StoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stores update
   */
  export type StoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stores
     */
    select?: StoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stores
     */
    omit?: StoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoresInclude<ExtArgs> | null
    /**
     * The data needed to update a Stores.
     */
    data: XOR<StoresUpdateInput, StoresUncheckedUpdateInput>
    /**
     * Choose, which Stores to update.
     */
    where: StoresWhereUniqueInput
  }

  /**
   * Stores updateMany
   */
  export type StoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoresUpdateManyMutationInput, StoresUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoresWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Stores updateManyAndReturn
   */
  export type StoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stores
     */
    select?: StoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stores
     */
    omit?: StoresOmit<ExtArgs> | null
    /**
     * The data used to update Stores.
     */
    data: XOR<StoresUpdateManyMutationInput, StoresUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoresWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Stores upsert
   */
  export type StoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stores
     */
    select?: StoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stores
     */
    omit?: StoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoresInclude<ExtArgs> | null
    /**
     * The filter to search for the Stores to update in case it exists.
     */
    where: StoresWhereUniqueInput
    /**
     * In case the Stores found by the `where` argument doesn't exist, create a new Stores with this data.
     */
    create: XOR<StoresCreateInput, StoresUncheckedCreateInput>
    /**
     * In case the Stores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoresUpdateInput, StoresUncheckedUpdateInput>
  }

  /**
   * Stores delete
   */
  export type StoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stores
     */
    select?: StoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stores
     */
    omit?: StoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoresInclude<ExtArgs> | null
    /**
     * Filter which Stores to delete.
     */
    where: StoresWhereUniqueInput
  }

  /**
   * Stores deleteMany
   */
  export type StoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoresWhereInput
    /**
     * Limit how many Stores to delete.
     */
    limit?: number
  }

  /**
   * Stores.inventories
   */
  export type Stores$inventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreInventory
     */
    select?: StoreInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreInventory
     */
    omit?: StoreInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInventoryInclude<ExtArgs> | null
    where?: StoreInventoryWhereInput
    orderBy?: StoreInventoryOrderByWithRelationInput | StoreInventoryOrderByWithRelationInput[]
    cursor?: StoreInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreInventoryScalarFieldEnum | StoreInventoryScalarFieldEnum[]
  }

  /**
   * Stores without action
   */
  export type StoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stores
     */
    select?: StoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stores
     */
    omit?: StoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoresInclude<ExtArgs> | null
  }


  /**
   * Model StoreInventory
   */

  export type AggregateStoreInventory = {
    _count: StoreInventoryCountAggregateOutputType | null
    _avg: StoreInventoryAvgAggregateOutputType | null
    _sum: StoreInventorySumAggregateOutputType | null
    _min: StoreInventoryMinAggregateOutputType | null
    _max: StoreInventoryMaxAggregateOutputType | null
  }

  export type StoreInventoryAvgAggregateOutputType = {
    id: number | null
    store_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type StoreInventorySumAggregateOutputType = {
    id: number | null
    store_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type StoreInventoryMinAggregateOutputType = {
    id: number | null
    store_id: number | null
    product_id: number | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreInventoryMaxAggregateOutputType = {
    id: number | null
    store_id: number | null
    product_id: number | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreInventoryCountAggregateOutputType = {
    id: number
    store_id: number
    product_id: number
    quantity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreInventoryAvgAggregateInputType = {
    id?: true
    store_id?: true
    product_id?: true
    quantity?: true
  }

  export type StoreInventorySumAggregateInputType = {
    id?: true
    store_id?: true
    product_id?: true
    quantity?: true
  }

  export type StoreInventoryMinAggregateInputType = {
    id?: true
    store_id?: true
    product_id?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreInventoryMaxAggregateInputType = {
    id?: true
    store_id?: true
    product_id?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreInventoryCountAggregateInputType = {
    id?: true
    store_id?: true
    product_id?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreInventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreInventory to aggregate.
     */
    where?: StoreInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreInventories to fetch.
     */
    orderBy?: StoreInventoryOrderByWithRelationInput | StoreInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreInventories
    **/
    _count?: true | StoreInventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreInventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreInventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreInventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreInventoryMaxAggregateInputType
  }

  export type GetStoreInventoryAggregateType<T extends StoreInventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreInventory[P]>
      : GetScalarType<T[P], AggregateStoreInventory[P]>
  }




  export type StoreInventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreInventoryWhereInput
    orderBy?: StoreInventoryOrderByWithAggregationInput | StoreInventoryOrderByWithAggregationInput[]
    by: StoreInventoryScalarFieldEnum[] | StoreInventoryScalarFieldEnum
    having?: StoreInventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreInventoryCountAggregateInputType | true
    _avg?: StoreInventoryAvgAggregateInputType
    _sum?: StoreInventorySumAggregateInputType
    _min?: StoreInventoryMinAggregateInputType
    _max?: StoreInventoryMaxAggregateInputType
  }

  export type StoreInventoryGroupByOutputType = {
    id: number
    store_id: number
    product_id: number
    quantity: number
    createdAt: Date
    updatedAt: Date
    _count: StoreInventoryCountAggregateOutputType | null
    _avg: StoreInventoryAvgAggregateOutputType | null
    _sum: StoreInventorySumAggregateOutputType | null
    _min: StoreInventoryMinAggregateOutputType | null
    _max: StoreInventoryMaxAggregateOutputType | null
  }

  type GetStoreInventoryGroupByPayload<T extends StoreInventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreInventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreInventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreInventoryGroupByOutputType[P]>
            : GetScalarType<T[P], StoreInventoryGroupByOutputType[P]>
        }
      >
    >


  export type StoreInventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    store_id?: boolean
    product_id?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoresDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeInventory"]>

  export type StoreInventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    store_id?: boolean
    product_id?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoresDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeInventory"]>

  export type StoreInventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    store_id?: boolean
    product_id?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoresDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeInventory"]>

  export type StoreInventorySelectScalar = {
    id?: boolean
    store_id?: boolean
    product_id?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoreInventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "store_id" | "product_id" | "quantity" | "createdAt" | "updatedAt", ExtArgs["result"]["storeInventory"]>
  export type StoreInventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoresDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type StoreInventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoresDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type StoreInventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoresDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $StoreInventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreInventory"
    objects: {
      store: Prisma.$StoresPayload<ExtArgs>
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      store_id: number
      product_id: number
      quantity: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["storeInventory"]>
    composites: {}
  }

  type StoreInventoryGetPayload<S extends boolean | null | undefined | StoreInventoryDefaultArgs> = $Result.GetResult<Prisma.$StoreInventoryPayload, S>

  type StoreInventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreInventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreInventoryCountAggregateInputType | true
    }

  export interface StoreInventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreInventory'], meta: { name: 'StoreInventory' } }
    /**
     * Find zero or one StoreInventory that matches the filter.
     * @param {StoreInventoryFindUniqueArgs} args - Arguments to find a StoreInventory
     * @example
     * // Get one StoreInventory
     * const storeInventory = await prisma.storeInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreInventoryFindUniqueArgs>(args: SelectSubset<T, StoreInventoryFindUniqueArgs<ExtArgs>>): Prisma__StoreInventoryClient<$Result.GetResult<Prisma.$StoreInventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoreInventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreInventoryFindUniqueOrThrowArgs} args - Arguments to find a StoreInventory
     * @example
     * // Get one StoreInventory
     * const storeInventory = await prisma.storeInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreInventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreInventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreInventoryClient<$Result.GetResult<Prisma.$StoreInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreInventoryFindFirstArgs} args - Arguments to find a StoreInventory
     * @example
     * // Get one StoreInventory
     * const storeInventory = await prisma.storeInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreInventoryFindFirstArgs>(args?: SelectSubset<T, StoreInventoryFindFirstArgs<ExtArgs>>): Prisma__StoreInventoryClient<$Result.GetResult<Prisma.$StoreInventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreInventoryFindFirstOrThrowArgs} args - Arguments to find a StoreInventory
     * @example
     * // Get one StoreInventory
     * const storeInventory = await prisma.storeInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreInventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreInventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreInventoryClient<$Result.GetResult<Prisma.$StoreInventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoreInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreInventories
     * const storeInventories = await prisma.storeInventory.findMany()
     * 
     * // Get first 10 StoreInventories
     * const storeInventories = await prisma.storeInventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeInventoryWithIdOnly = await prisma.storeInventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreInventoryFindManyArgs>(args?: SelectSubset<T, StoreInventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoreInventory.
     * @param {StoreInventoryCreateArgs} args - Arguments to create a StoreInventory.
     * @example
     * // Create one StoreInventory
     * const StoreInventory = await prisma.storeInventory.create({
     *   data: {
     *     // ... data to create a StoreInventory
     *   }
     * })
     * 
     */
    create<T extends StoreInventoryCreateArgs>(args: SelectSubset<T, StoreInventoryCreateArgs<ExtArgs>>): Prisma__StoreInventoryClient<$Result.GetResult<Prisma.$StoreInventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoreInventories.
     * @param {StoreInventoryCreateManyArgs} args - Arguments to create many StoreInventories.
     * @example
     * // Create many StoreInventories
     * const storeInventory = await prisma.storeInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreInventoryCreateManyArgs>(args?: SelectSubset<T, StoreInventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoreInventories and returns the data saved in the database.
     * @param {StoreInventoryCreateManyAndReturnArgs} args - Arguments to create many StoreInventories.
     * @example
     * // Create many StoreInventories
     * const storeInventory = await prisma.storeInventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoreInventories and only return the `id`
     * const storeInventoryWithIdOnly = await prisma.storeInventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreInventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreInventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreInventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StoreInventory.
     * @param {StoreInventoryDeleteArgs} args - Arguments to delete one StoreInventory.
     * @example
     * // Delete one StoreInventory
     * const StoreInventory = await prisma.storeInventory.delete({
     *   where: {
     *     // ... filter to delete one StoreInventory
     *   }
     * })
     * 
     */
    delete<T extends StoreInventoryDeleteArgs>(args: SelectSubset<T, StoreInventoryDeleteArgs<ExtArgs>>): Prisma__StoreInventoryClient<$Result.GetResult<Prisma.$StoreInventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoreInventory.
     * @param {StoreInventoryUpdateArgs} args - Arguments to update one StoreInventory.
     * @example
     * // Update one StoreInventory
     * const storeInventory = await prisma.storeInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreInventoryUpdateArgs>(args: SelectSubset<T, StoreInventoryUpdateArgs<ExtArgs>>): Prisma__StoreInventoryClient<$Result.GetResult<Prisma.$StoreInventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoreInventories.
     * @param {StoreInventoryDeleteManyArgs} args - Arguments to filter StoreInventories to delete.
     * @example
     * // Delete a few StoreInventories
     * const { count } = await prisma.storeInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreInventoryDeleteManyArgs>(args?: SelectSubset<T, StoreInventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreInventories
     * const storeInventory = await prisma.storeInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreInventoryUpdateManyArgs>(args: SelectSubset<T, StoreInventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreInventories and returns the data updated in the database.
     * @param {StoreInventoryUpdateManyAndReturnArgs} args - Arguments to update many StoreInventories.
     * @example
     * // Update many StoreInventories
     * const storeInventory = await prisma.storeInventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StoreInventories and only return the `id`
     * const storeInventoryWithIdOnly = await prisma.storeInventory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StoreInventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, StoreInventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreInventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StoreInventory.
     * @param {StoreInventoryUpsertArgs} args - Arguments to update or create a StoreInventory.
     * @example
     * // Update or create a StoreInventory
     * const storeInventory = await prisma.storeInventory.upsert({
     *   create: {
     *     // ... data to create a StoreInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreInventory we want to update
     *   }
     * })
     */
    upsert<T extends StoreInventoryUpsertArgs>(args: SelectSubset<T, StoreInventoryUpsertArgs<ExtArgs>>): Prisma__StoreInventoryClient<$Result.GetResult<Prisma.$StoreInventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoreInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreInventoryCountArgs} args - Arguments to filter StoreInventories to count.
     * @example
     * // Count the number of StoreInventories
     * const count = await prisma.storeInventory.count({
     *   where: {
     *     // ... the filter for the StoreInventories we want to count
     *   }
     * })
    **/
    count<T extends StoreInventoryCountArgs>(
      args?: Subset<T, StoreInventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreInventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreInventoryAggregateArgs>(args: Subset<T, StoreInventoryAggregateArgs>): Prisma.PrismaPromise<GetStoreInventoryAggregateType<T>>

    /**
     * Group by StoreInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreInventoryGroupByArgs} args - Group by arguments.
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
      T extends StoreInventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreInventoryGroupByArgs['orderBy'] }
        : { orderBy?: StoreInventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreInventory model
   */
  readonly fields: StoreInventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreInventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreInventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoresDefaultArgs<ExtArgs>>): Prisma__StoresClient<$Result.GetResult<Prisma.$StoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StoreInventory model
   */
  interface StoreInventoryFieldRefs {
    readonly id: FieldRef<"StoreInventory", 'Int'>
    readonly store_id: FieldRef<"StoreInventory", 'Int'>
    readonly product_id: FieldRef<"StoreInventory", 'Int'>
    readonly quantity: FieldRef<"StoreInventory", 'Int'>
    readonly createdAt: FieldRef<"StoreInventory", 'DateTime'>
    readonly updatedAt: FieldRef<"StoreInventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoreInventory findUnique
   */
  export type StoreInventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreInventory
     */
    select?: StoreInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreInventory
     */
    omit?: StoreInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInventoryInclude<ExtArgs> | null
    /**
     * Filter, which StoreInventory to fetch.
     */
    where: StoreInventoryWhereUniqueInput
  }

  /**
   * StoreInventory findUniqueOrThrow
   */
  export type StoreInventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreInventory
     */
    select?: StoreInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreInventory
     */
    omit?: StoreInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInventoryInclude<ExtArgs> | null
    /**
     * Filter, which StoreInventory to fetch.
     */
    where: StoreInventoryWhereUniqueInput
  }

  /**
   * StoreInventory findFirst
   */
  export type StoreInventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreInventory
     */
    select?: StoreInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreInventory
     */
    omit?: StoreInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInventoryInclude<ExtArgs> | null
    /**
     * Filter, which StoreInventory to fetch.
     */
    where?: StoreInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreInventories to fetch.
     */
    orderBy?: StoreInventoryOrderByWithRelationInput | StoreInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreInventories.
     */
    cursor?: StoreInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreInventories.
     */
    distinct?: StoreInventoryScalarFieldEnum | StoreInventoryScalarFieldEnum[]
  }

  /**
   * StoreInventory findFirstOrThrow
   */
  export type StoreInventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreInventory
     */
    select?: StoreInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreInventory
     */
    omit?: StoreInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInventoryInclude<ExtArgs> | null
    /**
     * Filter, which StoreInventory to fetch.
     */
    where?: StoreInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreInventories to fetch.
     */
    orderBy?: StoreInventoryOrderByWithRelationInput | StoreInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreInventories.
     */
    cursor?: StoreInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreInventories.
     */
    distinct?: StoreInventoryScalarFieldEnum | StoreInventoryScalarFieldEnum[]
  }

  /**
   * StoreInventory findMany
   */
  export type StoreInventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreInventory
     */
    select?: StoreInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreInventory
     */
    omit?: StoreInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInventoryInclude<ExtArgs> | null
    /**
     * Filter, which StoreInventories to fetch.
     */
    where?: StoreInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreInventories to fetch.
     */
    orderBy?: StoreInventoryOrderByWithRelationInput | StoreInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreInventories.
     */
    cursor?: StoreInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreInventories.
     */
    skip?: number
    distinct?: StoreInventoryScalarFieldEnum | StoreInventoryScalarFieldEnum[]
  }

  /**
   * StoreInventory create
   */
  export type StoreInventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreInventory
     */
    select?: StoreInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreInventory
     */
    omit?: StoreInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a StoreInventory.
     */
    data: XOR<StoreInventoryCreateInput, StoreInventoryUncheckedCreateInput>
  }

  /**
   * StoreInventory createMany
   */
  export type StoreInventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreInventories.
     */
    data: StoreInventoryCreateManyInput | StoreInventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreInventory createManyAndReturn
   */
  export type StoreInventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreInventory
     */
    select?: StoreInventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreInventory
     */
    omit?: StoreInventoryOmit<ExtArgs> | null
    /**
     * The data used to create many StoreInventories.
     */
    data: StoreInventoryCreateManyInput | StoreInventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoreInventory update
   */
  export type StoreInventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreInventory
     */
    select?: StoreInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreInventory
     */
    omit?: StoreInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a StoreInventory.
     */
    data: XOR<StoreInventoryUpdateInput, StoreInventoryUncheckedUpdateInput>
    /**
     * Choose, which StoreInventory to update.
     */
    where: StoreInventoryWhereUniqueInput
  }

  /**
   * StoreInventory updateMany
   */
  export type StoreInventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreInventories.
     */
    data: XOR<StoreInventoryUpdateManyMutationInput, StoreInventoryUncheckedUpdateManyInput>
    /**
     * Filter which StoreInventories to update
     */
    where?: StoreInventoryWhereInput
    /**
     * Limit how many StoreInventories to update.
     */
    limit?: number
  }

  /**
   * StoreInventory updateManyAndReturn
   */
  export type StoreInventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreInventory
     */
    select?: StoreInventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreInventory
     */
    omit?: StoreInventoryOmit<ExtArgs> | null
    /**
     * The data used to update StoreInventories.
     */
    data: XOR<StoreInventoryUpdateManyMutationInput, StoreInventoryUncheckedUpdateManyInput>
    /**
     * Filter which StoreInventories to update
     */
    where?: StoreInventoryWhereInput
    /**
     * Limit how many StoreInventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoreInventory upsert
   */
  export type StoreInventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreInventory
     */
    select?: StoreInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreInventory
     */
    omit?: StoreInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the StoreInventory to update in case it exists.
     */
    where: StoreInventoryWhereUniqueInput
    /**
     * In case the StoreInventory found by the `where` argument doesn't exist, create a new StoreInventory with this data.
     */
    create: XOR<StoreInventoryCreateInput, StoreInventoryUncheckedCreateInput>
    /**
     * In case the StoreInventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreInventoryUpdateInput, StoreInventoryUncheckedUpdateInput>
  }

  /**
   * StoreInventory delete
   */
  export type StoreInventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreInventory
     */
    select?: StoreInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreInventory
     */
    omit?: StoreInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInventoryInclude<ExtArgs> | null
    /**
     * Filter which StoreInventory to delete.
     */
    where: StoreInventoryWhereUniqueInput
  }

  /**
   * StoreInventory deleteMany
   */
  export type StoreInventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreInventories to delete
     */
    where?: StoreInventoryWhereInput
    /**
     * Limit how many StoreInventories to delete.
     */
    limit?: number
  }

  /**
   * StoreInventory without action
   */
  export type StoreInventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreInventory
     */
    select?: StoreInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreInventory
     */
    omit?: StoreInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInventoryInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    province: string | null
    district: string | null
    commune: string | null
    address: string | null
    housing_type: $Enums.HousingType | null
    password: string | null
    refreshToken: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    province: string | null
    district: string | null
    commune: string | null
    address: string | null
    housing_type: $Enums.HousingType | null
    password: string | null
    refreshToken: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    province: number
    district: number
    commune: number
    address: number
    housing_type: number
    password: number
    refreshToken: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    province?: true
    district?: true
    commune?: true
    address?: true
    housing_type?: true
    password?: true
    refreshToken?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    province?: true
    district?: true
    commune?: true
    address?: true
    housing_type?: true
    password?: true
    refreshToken?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    province?: true
    district?: true
    commune?: true
    address?: true
    housing_type?: true
    password?: true
    refreshToken?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    province: string
    district: string
    commune: string
    address: string
    housing_type: $Enums.HousingType
    password: string
    refreshToken: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    province?: boolean
    district?: boolean
    commune?: boolean
    address?: boolean
    housing_type?: boolean
    password?: boolean
    refreshToken?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vouchers?: boolean | Users$vouchersArgs<ExtArgs>
    orders?: boolean | Users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    province?: boolean
    district?: boolean
    commune?: boolean
    address?: boolean
    housing_type?: boolean
    password?: boolean
    refreshToken?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    province?: boolean
    district?: boolean
    commune?: boolean
    address?: boolean
    housing_type?: boolean
    password?: boolean
    refreshToken?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    province?: boolean
    district?: boolean
    commune?: boolean
    address?: boolean
    housing_type?: boolean
    password?: boolean
    refreshToken?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "province" | "district" | "commune" | "address" | "housing_type" | "password" | "refreshToken" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vouchers?: boolean | Users$vouchersArgs<ExtArgs>
    orders?: boolean | Users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      vouchers: Prisma.$UserVouchersPayload<ExtArgs>[]
      orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      province: string
      district: string
      commune: string
      address: string
      housing_type: $Enums.HousingType
      password: string
      refreshToken: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vouchers<T extends Users$vouchersArgs<ExtArgs> = {}>(args?: Subset<T, Users$vouchersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVouchersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly province: FieldRef<"Users", 'String'>
    readonly district: FieldRef<"Users", 'String'>
    readonly commune: FieldRef<"Users", 'String'>
    readonly address: FieldRef<"Users", 'String'>
    readonly housing_type: FieldRef<"Users", 'HousingType'>
    readonly password: FieldRef<"Users", 'String'>
    readonly refreshToken: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.vouchers
   */
  export type Users$vouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVouchers
     */
    select?: UserVouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVouchers
     */
    omit?: UserVouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVouchersInclude<ExtArgs> | null
    where?: UserVouchersWhereInput
    orderBy?: UserVouchersOrderByWithRelationInput | UserVouchersOrderByWithRelationInput[]
    cursor?: UserVouchersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserVouchersScalarFieldEnum | UserVouchersScalarFieldEnum[]
  }

  /**
   * Users.orders
   */
  export type Users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Vouchers
   */

  export type AggregateVouchers = {
    _count: VouchersCountAggregateOutputType | null
    _avg: VouchersAvgAggregateOutputType | null
    _sum: VouchersSumAggregateOutputType | null
    _min: VouchersMinAggregateOutputType | null
    _max: VouchersMaxAggregateOutputType | null
  }

  export type VouchersAvgAggregateOutputType = {
    id: number | null
    discount_amount: Decimal | null
  }

  export type VouchersSumAggregateOutputType = {
    id: number | null
    discount_amount: Decimal | null
  }

  export type VouchersMinAggregateOutputType = {
    id: number | null
    code: string | null
    discount_amount: Decimal | null
    description: string | null
    expiry_date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VouchersMaxAggregateOutputType = {
    id: number | null
    code: string | null
    discount_amount: Decimal | null
    description: string | null
    expiry_date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VouchersCountAggregateOutputType = {
    id: number
    code: number
    discount_amount: number
    description: number
    expiry_date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VouchersAvgAggregateInputType = {
    id?: true
    discount_amount?: true
  }

  export type VouchersSumAggregateInputType = {
    id?: true
    discount_amount?: true
  }

  export type VouchersMinAggregateInputType = {
    id?: true
    code?: true
    discount_amount?: true
    description?: true
    expiry_date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VouchersMaxAggregateInputType = {
    id?: true
    code?: true
    discount_amount?: true
    description?: true
    expiry_date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VouchersCountAggregateInputType = {
    id?: true
    code?: true
    discount_amount?: true
    description?: true
    expiry_date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VouchersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vouchers to aggregate.
     */
    where?: VouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VouchersOrderByWithRelationInput | VouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vouchers
    **/
    _count?: true | VouchersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VouchersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VouchersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VouchersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VouchersMaxAggregateInputType
  }

  export type GetVouchersAggregateType<T extends VouchersAggregateArgs> = {
        [P in keyof T & keyof AggregateVouchers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVouchers[P]>
      : GetScalarType<T[P], AggregateVouchers[P]>
  }




  export type VouchersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VouchersWhereInput
    orderBy?: VouchersOrderByWithAggregationInput | VouchersOrderByWithAggregationInput[]
    by: VouchersScalarFieldEnum[] | VouchersScalarFieldEnum
    having?: VouchersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VouchersCountAggregateInputType | true
    _avg?: VouchersAvgAggregateInputType
    _sum?: VouchersSumAggregateInputType
    _min?: VouchersMinAggregateInputType
    _max?: VouchersMaxAggregateInputType
  }

  export type VouchersGroupByOutputType = {
    id: number
    code: string
    discount_amount: Decimal | null
    description: string | null
    expiry_date: Date
    createdAt: Date
    updatedAt: Date
    _count: VouchersCountAggregateOutputType | null
    _avg: VouchersAvgAggregateOutputType | null
    _sum: VouchersSumAggregateOutputType | null
    _min: VouchersMinAggregateOutputType | null
    _max: VouchersMaxAggregateOutputType | null
  }

  type GetVouchersGroupByPayload<T extends VouchersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VouchersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VouchersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VouchersGroupByOutputType[P]>
            : GetScalarType<T[P], VouchersGroupByOutputType[P]>
        }
      >
    >


  export type VouchersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discount_amount?: boolean
    description?: boolean
    expiry_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user_vouchers?: boolean | Vouchers$user_vouchersArgs<ExtArgs>
    _count?: boolean | VouchersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vouchers"]>

  export type VouchersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discount_amount?: boolean
    description?: boolean
    expiry_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vouchers"]>

  export type VouchersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discount_amount?: boolean
    description?: boolean
    expiry_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vouchers"]>

  export type VouchersSelectScalar = {
    id?: boolean
    code?: boolean
    discount_amount?: boolean
    description?: boolean
    expiry_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VouchersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "discount_amount" | "description" | "expiry_date" | "createdAt" | "updatedAt", ExtArgs["result"]["vouchers"]>
  export type VouchersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_vouchers?: boolean | Vouchers$user_vouchersArgs<ExtArgs>
    _count?: boolean | VouchersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VouchersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VouchersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VouchersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vouchers"
    objects: {
      user_vouchers: Prisma.$UserVouchersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      discount_amount: Prisma.Decimal | null
      description: string | null
      expiry_date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vouchers"]>
    composites: {}
  }

  type VouchersGetPayload<S extends boolean | null | undefined | VouchersDefaultArgs> = $Result.GetResult<Prisma.$VouchersPayload, S>

  type VouchersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VouchersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VouchersCountAggregateInputType | true
    }

  export interface VouchersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vouchers'], meta: { name: 'Vouchers' } }
    /**
     * Find zero or one Vouchers that matches the filter.
     * @param {VouchersFindUniqueArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VouchersFindUniqueArgs>(args: SelectSubset<T, VouchersFindUniqueArgs<ExtArgs>>): Prisma__VouchersClient<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vouchers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VouchersFindUniqueOrThrowArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VouchersFindUniqueOrThrowArgs>(args: SelectSubset<T, VouchersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VouchersClient<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersFindFirstArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VouchersFindFirstArgs>(args?: SelectSubset<T, VouchersFindFirstArgs<ExtArgs>>): Prisma__VouchersClient<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vouchers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersFindFirstOrThrowArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VouchersFindFirstOrThrowArgs>(args?: SelectSubset<T, VouchersFindFirstOrThrowArgs<ExtArgs>>): Prisma__VouchersClient<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.vouchers.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.vouchers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vouchersWithIdOnly = await prisma.vouchers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VouchersFindManyArgs>(args?: SelectSubset<T, VouchersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vouchers.
     * @param {VouchersCreateArgs} args - Arguments to create a Vouchers.
     * @example
     * // Create one Vouchers
     * const Vouchers = await prisma.vouchers.create({
     *   data: {
     *     // ... data to create a Vouchers
     *   }
     * })
     * 
     */
    create<T extends VouchersCreateArgs>(args: SelectSubset<T, VouchersCreateArgs<ExtArgs>>): Prisma__VouchersClient<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vouchers.
     * @param {VouchersCreateManyArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const vouchers = await prisma.vouchers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VouchersCreateManyArgs>(args?: SelectSubset<T, VouchersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vouchers and returns the data saved in the database.
     * @param {VouchersCreateManyAndReturnArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const vouchers = await prisma.vouchers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vouchers and only return the `id`
     * const vouchersWithIdOnly = await prisma.vouchers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VouchersCreateManyAndReturnArgs>(args?: SelectSubset<T, VouchersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vouchers.
     * @param {VouchersDeleteArgs} args - Arguments to delete one Vouchers.
     * @example
     * // Delete one Vouchers
     * const Vouchers = await prisma.vouchers.delete({
     *   where: {
     *     // ... filter to delete one Vouchers
     *   }
     * })
     * 
     */
    delete<T extends VouchersDeleteArgs>(args: SelectSubset<T, VouchersDeleteArgs<ExtArgs>>): Prisma__VouchersClient<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vouchers.
     * @param {VouchersUpdateArgs} args - Arguments to update one Vouchers.
     * @example
     * // Update one Vouchers
     * const vouchers = await prisma.vouchers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VouchersUpdateArgs>(args: SelectSubset<T, VouchersUpdateArgs<ExtArgs>>): Prisma__VouchersClient<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vouchers.
     * @param {VouchersDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.vouchers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VouchersDeleteManyArgs>(args?: SelectSubset<T, VouchersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const vouchers = await prisma.vouchers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VouchersUpdateManyArgs>(args: SelectSubset<T, VouchersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers and returns the data updated in the database.
     * @param {VouchersUpdateManyAndReturnArgs} args - Arguments to update many Vouchers.
     * @example
     * // Update many Vouchers
     * const vouchers = await prisma.vouchers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vouchers and only return the `id`
     * const vouchersWithIdOnly = await prisma.vouchers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VouchersUpdateManyAndReturnArgs>(args: SelectSubset<T, VouchersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vouchers.
     * @param {VouchersUpsertArgs} args - Arguments to update or create a Vouchers.
     * @example
     * // Update or create a Vouchers
     * const vouchers = await prisma.vouchers.upsert({
     *   create: {
     *     // ... data to create a Vouchers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vouchers we want to update
     *   }
     * })
     */
    upsert<T extends VouchersUpsertArgs>(args: SelectSubset<T, VouchersUpsertArgs<ExtArgs>>): Prisma__VouchersClient<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.vouchers.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends VouchersCountArgs>(
      args?: Subset<T, VouchersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VouchersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VouchersAggregateArgs>(args: Subset<T, VouchersAggregateArgs>): Prisma.PrismaPromise<GetVouchersAggregateType<T>>

    /**
     * Group by Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersGroupByArgs} args - Group by arguments.
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
      T extends VouchersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VouchersGroupByArgs['orderBy'] }
        : { orderBy?: VouchersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VouchersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVouchersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vouchers model
   */
  readonly fields: VouchersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vouchers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VouchersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_vouchers<T extends Vouchers$user_vouchersArgs<ExtArgs> = {}>(args?: Subset<T, Vouchers$user_vouchersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVouchersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vouchers model
   */
  interface VouchersFieldRefs {
    readonly id: FieldRef<"Vouchers", 'Int'>
    readonly code: FieldRef<"Vouchers", 'String'>
    readonly discount_amount: FieldRef<"Vouchers", 'Decimal'>
    readonly description: FieldRef<"Vouchers", 'String'>
    readonly expiry_date: FieldRef<"Vouchers", 'DateTime'>
    readonly createdAt: FieldRef<"Vouchers", 'DateTime'>
    readonly updatedAt: FieldRef<"Vouchers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vouchers findUnique
   */
  export type VouchersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where: VouchersWhereUniqueInput
  }

  /**
   * Vouchers findUniqueOrThrow
   */
  export type VouchersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where: VouchersWhereUniqueInput
  }

  /**
   * Vouchers findFirst
   */
  export type VouchersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VouchersOrderByWithRelationInput | VouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * Vouchers findFirstOrThrow
   */
  export type VouchersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VouchersOrderByWithRelationInput | VouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * Vouchers findMany
   */
  export type VouchersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VouchersOrderByWithRelationInput | VouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vouchers.
     */
    cursor?: VouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * Vouchers create
   */
  export type VouchersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    /**
     * The data needed to create a Vouchers.
     */
    data: XOR<VouchersCreateInput, VouchersUncheckedCreateInput>
  }

  /**
   * Vouchers createMany
   */
  export type VouchersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vouchers.
     */
    data: VouchersCreateManyInput | VouchersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vouchers createManyAndReturn
   */
  export type VouchersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * The data used to create many Vouchers.
     */
    data: VouchersCreateManyInput | VouchersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vouchers update
   */
  export type VouchersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    /**
     * The data needed to update a Vouchers.
     */
    data: XOR<VouchersUpdateInput, VouchersUncheckedUpdateInput>
    /**
     * Choose, which Vouchers to update.
     */
    where: VouchersWhereUniqueInput
  }

  /**
   * Vouchers updateMany
   */
  export type VouchersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VouchersUpdateManyMutationInput, VouchersUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VouchersWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
  }

  /**
   * Vouchers updateManyAndReturn
   */
  export type VouchersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VouchersUpdateManyMutationInput, VouchersUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VouchersWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
  }

  /**
   * Vouchers upsert
   */
  export type VouchersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    /**
     * The filter to search for the Vouchers to update in case it exists.
     */
    where: VouchersWhereUniqueInput
    /**
     * In case the Vouchers found by the `where` argument doesn't exist, create a new Vouchers with this data.
     */
    create: XOR<VouchersCreateInput, VouchersUncheckedCreateInput>
    /**
     * In case the Vouchers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VouchersUpdateInput, VouchersUncheckedUpdateInput>
  }

  /**
   * Vouchers delete
   */
  export type VouchersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    /**
     * Filter which Vouchers to delete.
     */
    where: VouchersWhereUniqueInput
  }

  /**
   * Vouchers deleteMany
   */
  export type VouchersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vouchers to delete
     */
    where?: VouchersWhereInput
    /**
     * Limit how many Vouchers to delete.
     */
    limit?: number
  }

  /**
   * Vouchers.user_vouchers
   */
  export type Vouchers$user_vouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVouchers
     */
    select?: UserVouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVouchers
     */
    omit?: UserVouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVouchersInclude<ExtArgs> | null
    where?: UserVouchersWhereInput
    orderBy?: UserVouchersOrderByWithRelationInput | UserVouchersOrderByWithRelationInput[]
    cursor?: UserVouchersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserVouchersScalarFieldEnum | UserVouchersScalarFieldEnum[]
  }

  /**
   * Vouchers without action
   */
  export type VouchersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
  }


  /**
   * Model UserVouchers
   */

  export type AggregateUserVouchers = {
    _count: UserVouchersCountAggregateOutputType | null
    _avg: UserVouchersAvgAggregateOutputType | null
    _sum: UserVouchersSumAggregateOutputType | null
    _min: UserVouchersMinAggregateOutputType | null
    _max: UserVouchersMaxAggregateOutputType | null
  }

  export type UserVouchersAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    voucher_id: number | null
  }

  export type UserVouchersSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    voucher_id: number | null
  }

  export type UserVouchersMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    voucher_id: number | null
    is_used: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserVouchersMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    voucher_id: number | null
    is_used: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserVouchersCountAggregateOutputType = {
    id: number
    user_id: number
    voucher_id: number
    is_used: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserVouchersAvgAggregateInputType = {
    id?: true
    user_id?: true
    voucher_id?: true
  }

  export type UserVouchersSumAggregateInputType = {
    id?: true
    user_id?: true
    voucher_id?: true
  }

  export type UserVouchersMinAggregateInputType = {
    id?: true
    user_id?: true
    voucher_id?: true
    is_used?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserVouchersMaxAggregateInputType = {
    id?: true
    user_id?: true
    voucher_id?: true
    is_used?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserVouchersCountAggregateInputType = {
    id?: true
    user_id?: true
    voucher_id?: true
    is_used?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserVouchersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVouchers to aggregate.
     */
    where?: UserVouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVouchers to fetch.
     */
    orderBy?: UserVouchersOrderByWithRelationInput | UserVouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserVouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserVouchers
    **/
    _count?: true | UserVouchersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserVouchersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserVouchersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserVouchersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserVouchersMaxAggregateInputType
  }

  export type GetUserVouchersAggregateType<T extends UserVouchersAggregateArgs> = {
        [P in keyof T & keyof AggregateUserVouchers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserVouchers[P]>
      : GetScalarType<T[P], AggregateUserVouchers[P]>
  }




  export type UserVouchersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVouchersWhereInput
    orderBy?: UserVouchersOrderByWithAggregationInput | UserVouchersOrderByWithAggregationInput[]
    by: UserVouchersScalarFieldEnum[] | UserVouchersScalarFieldEnum
    having?: UserVouchersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserVouchersCountAggregateInputType | true
    _avg?: UserVouchersAvgAggregateInputType
    _sum?: UserVouchersSumAggregateInputType
    _min?: UserVouchersMinAggregateInputType
    _max?: UserVouchersMaxAggregateInputType
  }

  export type UserVouchersGroupByOutputType = {
    id: number
    user_id: number
    voucher_id: number
    is_used: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserVouchersCountAggregateOutputType | null
    _avg: UserVouchersAvgAggregateOutputType | null
    _sum: UserVouchersSumAggregateOutputType | null
    _min: UserVouchersMinAggregateOutputType | null
    _max: UserVouchersMaxAggregateOutputType | null
  }

  type GetUserVouchersGroupByPayload<T extends UserVouchersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserVouchersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserVouchersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserVouchersGroupByOutputType[P]>
            : GetScalarType<T[P], UserVouchersGroupByOutputType[P]>
        }
      >
    >


  export type UserVouchersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    voucher_id?: boolean
    is_used?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    voucher?: boolean | VouchersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVouchers"]>

  export type UserVouchersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    voucher_id?: boolean
    is_used?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    voucher?: boolean | VouchersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVouchers"]>

  export type UserVouchersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    voucher_id?: boolean
    is_used?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    voucher?: boolean | VouchersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVouchers"]>

  export type UserVouchersSelectScalar = {
    id?: boolean
    user_id?: boolean
    voucher_id?: boolean
    is_used?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserVouchersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "voucher_id" | "is_used" | "createdAt" | "updatedAt", ExtArgs["result"]["userVouchers"]>
  export type UserVouchersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    voucher?: boolean | VouchersDefaultArgs<ExtArgs>
  }
  export type UserVouchersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    voucher?: boolean | VouchersDefaultArgs<ExtArgs>
  }
  export type UserVouchersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    voucher?: boolean | VouchersDefaultArgs<ExtArgs>
  }

  export type $UserVouchersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserVouchers"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      voucher: Prisma.$VouchersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      voucher_id: number
      is_used: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userVouchers"]>
    composites: {}
  }

  type UserVouchersGetPayload<S extends boolean | null | undefined | UserVouchersDefaultArgs> = $Result.GetResult<Prisma.$UserVouchersPayload, S>

  type UserVouchersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserVouchersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserVouchersCountAggregateInputType | true
    }

  export interface UserVouchersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserVouchers'], meta: { name: 'UserVouchers' } }
    /**
     * Find zero or one UserVouchers that matches the filter.
     * @param {UserVouchersFindUniqueArgs} args - Arguments to find a UserVouchers
     * @example
     * // Get one UserVouchers
     * const userVouchers = await prisma.userVouchers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserVouchersFindUniqueArgs>(args: SelectSubset<T, UserVouchersFindUniqueArgs<ExtArgs>>): Prisma__UserVouchersClient<$Result.GetResult<Prisma.$UserVouchersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserVouchers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserVouchersFindUniqueOrThrowArgs} args - Arguments to find a UserVouchers
     * @example
     * // Get one UserVouchers
     * const userVouchers = await prisma.userVouchers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserVouchersFindUniqueOrThrowArgs>(args: SelectSubset<T, UserVouchersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserVouchersClient<$Result.GetResult<Prisma.$UserVouchersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserVouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVouchersFindFirstArgs} args - Arguments to find a UserVouchers
     * @example
     * // Get one UserVouchers
     * const userVouchers = await prisma.userVouchers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserVouchersFindFirstArgs>(args?: SelectSubset<T, UserVouchersFindFirstArgs<ExtArgs>>): Prisma__UserVouchersClient<$Result.GetResult<Prisma.$UserVouchersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserVouchers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVouchersFindFirstOrThrowArgs} args - Arguments to find a UserVouchers
     * @example
     * // Get one UserVouchers
     * const userVouchers = await prisma.userVouchers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserVouchersFindFirstOrThrowArgs>(args?: SelectSubset<T, UserVouchersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserVouchersClient<$Result.GetResult<Prisma.$UserVouchersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserVouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVouchersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserVouchers
     * const userVouchers = await prisma.userVouchers.findMany()
     * 
     * // Get first 10 UserVouchers
     * const userVouchers = await prisma.userVouchers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userVouchersWithIdOnly = await prisma.userVouchers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserVouchersFindManyArgs>(args?: SelectSubset<T, UserVouchersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVouchersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserVouchers.
     * @param {UserVouchersCreateArgs} args - Arguments to create a UserVouchers.
     * @example
     * // Create one UserVouchers
     * const UserVouchers = await prisma.userVouchers.create({
     *   data: {
     *     // ... data to create a UserVouchers
     *   }
     * })
     * 
     */
    create<T extends UserVouchersCreateArgs>(args: SelectSubset<T, UserVouchersCreateArgs<ExtArgs>>): Prisma__UserVouchersClient<$Result.GetResult<Prisma.$UserVouchersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserVouchers.
     * @param {UserVouchersCreateManyArgs} args - Arguments to create many UserVouchers.
     * @example
     * // Create many UserVouchers
     * const userVouchers = await prisma.userVouchers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserVouchersCreateManyArgs>(args?: SelectSubset<T, UserVouchersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserVouchers and returns the data saved in the database.
     * @param {UserVouchersCreateManyAndReturnArgs} args - Arguments to create many UserVouchers.
     * @example
     * // Create many UserVouchers
     * const userVouchers = await prisma.userVouchers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserVouchers and only return the `id`
     * const userVouchersWithIdOnly = await prisma.userVouchers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserVouchersCreateManyAndReturnArgs>(args?: SelectSubset<T, UserVouchersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVouchersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserVouchers.
     * @param {UserVouchersDeleteArgs} args - Arguments to delete one UserVouchers.
     * @example
     * // Delete one UserVouchers
     * const UserVouchers = await prisma.userVouchers.delete({
     *   where: {
     *     // ... filter to delete one UserVouchers
     *   }
     * })
     * 
     */
    delete<T extends UserVouchersDeleteArgs>(args: SelectSubset<T, UserVouchersDeleteArgs<ExtArgs>>): Prisma__UserVouchersClient<$Result.GetResult<Prisma.$UserVouchersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserVouchers.
     * @param {UserVouchersUpdateArgs} args - Arguments to update one UserVouchers.
     * @example
     * // Update one UserVouchers
     * const userVouchers = await prisma.userVouchers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserVouchersUpdateArgs>(args: SelectSubset<T, UserVouchersUpdateArgs<ExtArgs>>): Prisma__UserVouchersClient<$Result.GetResult<Prisma.$UserVouchersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserVouchers.
     * @param {UserVouchersDeleteManyArgs} args - Arguments to filter UserVouchers to delete.
     * @example
     * // Delete a few UserVouchers
     * const { count } = await prisma.userVouchers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserVouchersDeleteManyArgs>(args?: SelectSubset<T, UserVouchersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVouchersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserVouchers
     * const userVouchers = await prisma.userVouchers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserVouchersUpdateManyArgs>(args: SelectSubset<T, UserVouchersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVouchers and returns the data updated in the database.
     * @param {UserVouchersUpdateManyAndReturnArgs} args - Arguments to update many UserVouchers.
     * @example
     * // Update many UserVouchers
     * const userVouchers = await prisma.userVouchers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserVouchers and only return the `id`
     * const userVouchersWithIdOnly = await prisma.userVouchers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserVouchersUpdateManyAndReturnArgs>(args: SelectSubset<T, UserVouchersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVouchersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserVouchers.
     * @param {UserVouchersUpsertArgs} args - Arguments to update or create a UserVouchers.
     * @example
     * // Update or create a UserVouchers
     * const userVouchers = await prisma.userVouchers.upsert({
     *   create: {
     *     // ... data to create a UserVouchers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserVouchers we want to update
     *   }
     * })
     */
    upsert<T extends UserVouchersUpsertArgs>(args: SelectSubset<T, UserVouchersUpsertArgs<ExtArgs>>): Prisma__UserVouchersClient<$Result.GetResult<Prisma.$UserVouchersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserVouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVouchersCountArgs} args - Arguments to filter UserVouchers to count.
     * @example
     * // Count the number of UserVouchers
     * const count = await prisma.userVouchers.count({
     *   where: {
     *     // ... the filter for the UserVouchers we want to count
     *   }
     * })
    **/
    count<T extends UserVouchersCountArgs>(
      args?: Subset<T, UserVouchersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserVouchersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserVouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVouchersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserVouchersAggregateArgs>(args: Subset<T, UserVouchersAggregateArgs>): Prisma.PrismaPromise<GetUserVouchersAggregateType<T>>

    /**
     * Group by UserVouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVouchersGroupByArgs} args - Group by arguments.
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
      T extends UserVouchersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserVouchersGroupByArgs['orderBy'] }
        : { orderBy?: UserVouchersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserVouchersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserVouchersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserVouchers model
   */
  readonly fields: UserVouchersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserVouchers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserVouchersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voucher<T extends VouchersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VouchersDefaultArgs<ExtArgs>>): Prisma__VouchersClient<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserVouchers model
   */
  interface UserVouchersFieldRefs {
    readonly id: FieldRef<"UserVouchers", 'Int'>
    readonly user_id: FieldRef<"UserVouchers", 'Int'>
    readonly voucher_id: FieldRef<"UserVouchers", 'Int'>
    readonly is_used: FieldRef<"UserVouchers", 'Boolean'>
    readonly createdAt: FieldRef<"UserVouchers", 'DateTime'>
    readonly updatedAt: FieldRef<"UserVouchers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserVouchers findUnique
   */
  export type UserVouchersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVouchers
     */
    select?: UserVouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVouchers
     */
    omit?: UserVouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVouchersInclude<ExtArgs> | null
    /**
     * Filter, which UserVouchers to fetch.
     */
    where: UserVouchersWhereUniqueInput
  }

  /**
   * UserVouchers findUniqueOrThrow
   */
  export type UserVouchersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVouchers
     */
    select?: UserVouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVouchers
     */
    omit?: UserVouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVouchersInclude<ExtArgs> | null
    /**
     * Filter, which UserVouchers to fetch.
     */
    where: UserVouchersWhereUniqueInput
  }

  /**
   * UserVouchers findFirst
   */
  export type UserVouchersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVouchers
     */
    select?: UserVouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVouchers
     */
    omit?: UserVouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVouchersInclude<ExtArgs> | null
    /**
     * Filter, which UserVouchers to fetch.
     */
    where?: UserVouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVouchers to fetch.
     */
    orderBy?: UserVouchersOrderByWithRelationInput | UserVouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVouchers.
     */
    cursor?: UserVouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVouchers.
     */
    distinct?: UserVouchersScalarFieldEnum | UserVouchersScalarFieldEnum[]
  }

  /**
   * UserVouchers findFirstOrThrow
   */
  export type UserVouchersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVouchers
     */
    select?: UserVouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVouchers
     */
    omit?: UserVouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVouchersInclude<ExtArgs> | null
    /**
     * Filter, which UserVouchers to fetch.
     */
    where?: UserVouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVouchers to fetch.
     */
    orderBy?: UserVouchersOrderByWithRelationInput | UserVouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVouchers.
     */
    cursor?: UserVouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVouchers.
     */
    distinct?: UserVouchersScalarFieldEnum | UserVouchersScalarFieldEnum[]
  }

  /**
   * UserVouchers findMany
   */
  export type UserVouchersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVouchers
     */
    select?: UserVouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVouchers
     */
    omit?: UserVouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVouchersInclude<ExtArgs> | null
    /**
     * Filter, which UserVouchers to fetch.
     */
    where?: UserVouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVouchers to fetch.
     */
    orderBy?: UserVouchersOrderByWithRelationInput | UserVouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserVouchers.
     */
    cursor?: UserVouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVouchers.
     */
    skip?: number
    distinct?: UserVouchersScalarFieldEnum | UserVouchersScalarFieldEnum[]
  }

  /**
   * UserVouchers create
   */
  export type UserVouchersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVouchers
     */
    select?: UserVouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVouchers
     */
    omit?: UserVouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVouchersInclude<ExtArgs> | null
    /**
     * The data needed to create a UserVouchers.
     */
    data: XOR<UserVouchersCreateInput, UserVouchersUncheckedCreateInput>
  }

  /**
   * UserVouchers createMany
   */
  export type UserVouchersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserVouchers.
     */
    data: UserVouchersCreateManyInput | UserVouchersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserVouchers createManyAndReturn
   */
  export type UserVouchersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVouchers
     */
    select?: UserVouchersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserVouchers
     */
    omit?: UserVouchersOmit<ExtArgs> | null
    /**
     * The data used to create many UserVouchers.
     */
    data: UserVouchersCreateManyInput | UserVouchersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVouchersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserVouchers update
   */
  export type UserVouchersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVouchers
     */
    select?: UserVouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVouchers
     */
    omit?: UserVouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVouchersInclude<ExtArgs> | null
    /**
     * The data needed to update a UserVouchers.
     */
    data: XOR<UserVouchersUpdateInput, UserVouchersUncheckedUpdateInput>
    /**
     * Choose, which UserVouchers to update.
     */
    where: UserVouchersWhereUniqueInput
  }

  /**
   * UserVouchers updateMany
   */
  export type UserVouchersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserVouchers.
     */
    data: XOR<UserVouchersUpdateManyMutationInput, UserVouchersUncheckedUpdateManyInput>
    /**
     * Filter which UserVouchers to update
     */
    where?: UserVouchersWhereInput
    /**
     * Limit how many UserVouchers to update.
     */
    limit?: number
  }

  /**
   * UserVouchers updateManyAndReturn
   */
  export type UserVouchersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVouchers
     */
    select?: UserVouchersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserVouchers
     */
    omit?: UserVouchersOmit<ExtArgs> | null
    /**
     * The data used to update UserVouchers.
     */
    data: XOR<UserVouchersUpdateManyMutationInput, UserVouchersUncheckedUpdateManyInput>
    /**
     * Filter which UserVouchers to update
     */
    where?: UserVouchersWhereInput
    /**
     * Limit how many UserVouchers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVouchersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserVouchers upsert
   */
  export type UserVouchersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVouchers
     */
    select?: UserVouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVouchers
     */
    omit?: UserVouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVouchersInclude<ExtArgs> | null
    /**
     * The filter to search for the UserVouchers to update in case it exists.
     */
    where: UserVouchersWhereUniqueInput
    /**
     * In case the UserVouchers found by the `where` argument doesn't exist, create a new UserVouchers with this data.
     */
    create: XOR<UserVouchersCreateInput, UserVouchersUncheckedCreateInput>
    /**
     * In case the UserVouchers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserVouchersUpdateInput, UserVouchersUncheckedUpdateInput>
  }

  /**
   * UserVouchers delete
   */
  export type UserVouchersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVouchers
     */
    select?: UserVouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVouchers
     */
    omit?: UserVouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVouchersInclude<ExtArgs> | null
    /**
     * Filter which UserVouchers to delete.
     */
    where: UserVouchersWhereUniqueInput
  }

  /**
   * UserVouchers deleteMany
   */
  export type UserVouchersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVouchers to delete
     */
    where?: UserVouchersWhereInput
    /**
     * Limit how many UserVouchers to delete.
     */
    limit?: number
  }

  /**
   * UserVouchers without action
   */
  export type UserVouchersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVouchers
     */
    select?: UserVouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVouchers
     */
    omit?: UserVouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVouchersInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_price: Decimal | null
    shipping_fee: Decimal | null
    discount: Decimal | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_price: Decimal | null
    shipping_fee: Decimal | null
    discount: Decimal | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    order_date: Date | null
    total_price: Decimal | null
    status: string | null
    gender: string | null
    shipping_method: string | null
    payment_method: string | null
    shipping_fee: Decimal | null
    discount: Decimal | null
    housing_type: string | null
    address: string | null
    email: string | null
    phone: string | null
    recipient_name: string | null
    is_not_self_recipient: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    order_date: Date | null
    total_price: Decimal | null
    status: string | null
    gender: string | null
    shipping_method: string | null
    payment_method: string | null
    shipping_fee: Decimal | null
    discount: Decimal | null
    housing_type: string | null
    address: string | null
    email: string | null
    phone: string | null
    recipient_name: string | null
    is_not_self_recipient: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    user_id: number
    order_date: number
    total_price: number
    status: number
    gender: number
    shipping_method: number
    payment_method: number
    shipping_fee: number
    discount: number
    housing_type: number
    address: number
    email: number
    phone: number
    recipient_name: number
    is_not_self_recipient: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
    shipping_fee?: true
    discount?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
    shipping_fee?: true
    discount?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    user_id?: true
    order_date?: true
    total_price?: true
    status?: true
    gender?: true
    shipping_method?: true
    payment_method?: true
    shipping_fee?: true
    discount?: true
    housing_type?: true
    address?: true
    email?: true
    phone?: true
    recipient_name?: true
    is_not_self_recipient?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    user_id?: true
    order_date?: true
    total_price?: true
    status?: true
    gender?: true
    shipping_method?: true
    payment_method?: true
    shipping_fee?: true
    discount?: true
    housing_type?: true
    address?: true
    email?: true
    phone?: true
    recipient_name?: true
    is_not_self_recipient?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    user_id?: true
    order_date?: true
    total_price?: true
    status?: true
    gender?: true
    shipping_method?: true
    payment_method?: true
    shipping_fee?: true
    discount?: true
    housing_type?: true
    address?: true
    email?: true
    phone?: true
    recipient_name?: true
    is_not_self_recipient?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    user_id: number
    order_date: Date
    total_price: Decimal | null
    status: string
    gender: string
    shipping_method: string
    payment_method: string
    shipping_fee: Decimal
    discount: Decimal
    housing_type: string
    address: string
    email: string
    phone: string
    recipient_name: string
    is_not_self_recipient: boolean
    createdAt: Date
    updatedAt: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    order_date?: boolean
    total_price?: boolean
    status?: boolean
    gender?: boolean
    shipping_method?: boolean
    payment_method?: boolean
    shipping_fee?: boolean
    discount?: boolean
    housing_type?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
    recipient_name?: boolean
    is_not_self_recipient?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    order_items?: boolean | Orders$order_itemsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    order_date?: boolean
    total_price?: boolean
    status?: boolean
    gender?: boolean
    shipping_method?: boolean
    payment_method?: boolean
    shipping_fee?: boolean
    discount?: boolean
    housing_type?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
    recipient_name?: boolean
    is_not_self_recipient?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    order_date?: boolean
    total_price?: boolean
    status?: boolean
    gender?: boolean
    shipping_method?: boolean
    payment_method?: boolean
    shipping_fee?: boolean
    discount?: boolean
    housing_type?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
    recipient_name?: boolean
    is_not_self_recipient?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean
    user_id?: boolean
    order_date?: boolean
    total_price?: boolean
    status?: boolean
    gender?: boolean
    shipping_method?: boolean
    payment_method?: boolean
    shipping_fee?: boolean
    discount?: boolean
    housing_type?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
    recipient_name?: boolean
    is_not_self_recipient?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "order_date" | "total_price" | "status" | "gender" | "shipping_method" | "payment_method" | "shipping_fee" | "discount" | "housing_type" | "address" | "email" | "phone" | "recipient_name" | "is_not_self_recipient" | "createdAt" | "updatedAt", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    order_items?: boolean | Orders$order_itemsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      order_items: Prisma.$OrderItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      order_date: Date
      total_price: Prisma.Decimal | null
      status: string
      gender: string
      shipping_method: string
      payment_method: string
      shipping_fee: Prisma.Decimal
      discount: Prisma.Decimal
      housing_type: string
      address: string
      email: string
      phone: string
      recipient_name: string
      is_not_self_recipient: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order_items<T extends Orders$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'Int'>
    readonly user_id: FieldRef<"Orders", 'Int'>
    readonly order_date: FieldRef<"Orders", 'DateTime'>
    readonly total_price: FieldRef<"Orders", 'Decimal'>
    readonly status: FieldRef<"Orders", 'String'>
    readonly gender: FieldRef<"Orders", 'String'>
    readonly shipping_method: FieldRef<"Orders", 'String'>
    readonly payment_method: FieldRef<"Orders", 'String'>
    readonly shipping_fee: FieldRef<"Orders", 'Decimal'>
    readonly discount: FieldRef<"Orders", 'Decimal'>
    readonly housing_type: FieldRef<"Orders", 'String'>
    readonly address: FieldRef<"Orders", 'String'>
    readonly email: FieldRef<"Orders", 'String'>
    readonly phone: FieldRef<"Orders", 'String'>
    readonly recipient_name: FieldRef<"Orders", 'String'>
    readonly is_not_self_recipient: FieldRef<"Orders", 'Boolean'>
    readonly createdAt: FieldRef<"Orders", 'DateTime'>
    readonly updatedAt: FieldRef<"Orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.order_items
   */
  export type Orders$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    cursor?: OrderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model OrderItems
   */

  export type AggregateOrderItems = {
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  export type OrderItemsAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    discount: Decimal | null
  }

  export type OrderItemsSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    discount: Decimal | null
  }

  export type OrderItemsMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    discount: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemsMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    discount: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemsCountAggregateOutputType = {
    id: number
    order_id: number
    product_id: number
    quantity: number
    unit_price: number
    discount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderItemsAvgAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    discount?: true
  }

  export type OrderItemsSumAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    discount?: true
  }

  export type OrderItemsMinAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    discount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemsMaxAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    discount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemsCountAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    discount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to aggregate.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemsMaxAggregateInputType
  }

  export type GetOrderItemsAggregateType<T extends OrderItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItems[P]>
      : GetScalarType<T[P], AggregateOrderItems[P]>
  }




  export type OrderItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithAggregationInput | OrderItemsOrderByWithAggregationInput[]
    by: OrderItemsScalarFieldEnum[] | OrderItemsScalarFieldEnum
    having?: OrderItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemsCountAggregateInputType | true
    _avg?: OrderItemsAvgAggregateInputType
    _sum?: OrderItemsSumAggregateInputType
    _min?: OrderItemsMinAggregateInputType
    _max?: OrderItemsMaxAggregateInputType
  }

  export type OrderItemsGroupByOutputType = {
    id: number
    order_id: number
    product_id: number
    quantity: number
    unit_price: Decimal
    discount: Decimal
    createdAt: Date
    updatedAt: Date
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  type GetOrderItemsGroupByPayload<T extends OrderItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItems"]>

  export type OrderItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItems"]>

  export type OrderItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItems"]>

  export type OrderItemsSelectScalar = {
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "product_id" | "quantity" | "unit_price" | "discount" | "createdAt" | "updatedAt", ExtArgs["result"]["orderItems"]>
  export type OrderItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type OrderItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type OrderItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $OrderItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItems"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs>
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number
      product_id: number
      quantity: number
      unit_price: Prisma.Decimal
      discount: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderItems"]>
    composites: {}
  }

  type OrderItemsGetPayload<S extends boolean | null | undefined | OrderItemsDefaultArgs> = $Result.GetResult<Prisma.$OrderItemsPayload, S>

  type OrderItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemsCountAggregateInputType | true
    }

  export interface OrderItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItems'], meta: { name: 'OrderItems' } }
    /**
     * Find zero or one OrderItems that matches the filter.
     * @param {OrderItemsFindUniqueArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemsFindUniqueArgs>(args: SelectSubset<T, OrderItemsFindUniqueArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemsFindUniqueOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindFirstArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemsFindFirstArgs>(args?: SelectSubset<T, OrderItemsFindFirstArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindFirstOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItems.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemsWithIdOnly = await prisma.orderItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemsFindManyArgs>(args?: SelectSubset<T, OrderItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItems.
     * @param {OrderItemsCreateArgs} args - Arguments to create a OrderItems.
     * @example
     * // Create one OrderItems
     * const OrderItems = await prisma.orderItems.create({
     *   data: {
     *     // ... data to create a OrderItems
     *   }
     * })
     * 
     */
    create<T extends OrderItemsCreateArgs>(args: SelectSubset<T, OrderItemsCreateArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemsCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItems = await prisma.orderItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemsCreateManyArgs>(args?: SelectSubset<T, OrderItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemsCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItems = await prisma.orderItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemsWithIdOnly = await prisma.orderItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItems.
     * @param {OrderItemsDeleteArgs} args - Arguments to delete one OrderItems.
     * @example
     * // Delete one OrderItems
     * const OrderItems = await prisma.orderItems.delete({
     *   where: {
     *     // ... filter to delete one OrderItems
     *   }
     * })
     * 
     */
    delete<T extends OrderItemsDeleteArgs>(args: SelectSubset<T, OrderItemsDeleteArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItems.
     * @param {OrderItemsUpdateArgs} args - Arguments to update one OrderItems.
     * @example
     * // Update one OrderItems
     * const orderItems = await prisma.orderItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemsUpdateArgs>(args: SelectSubset<T, OrderItemsUpdateArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemsDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemsDeleteManyArgs>(args?: SelectSubset<T, OrderItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItems = await prisma.orderItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemsUpdateManyArgs>(args: SelectSubset<T, OrderItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemsUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItems = await prisma.orderItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemsWithIdOnly = await prisma.orderItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItems.
     * @param {OrderItemsUpsertArgs} args - Arguments to update or create a OrderItems.
     * @example
     * // Update or create a OrderItems
     * const orderItems = await prisma.orderItems.upsert({
     *   create: {
     *     // ... data to create a OrderItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItems we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemsUpsertArgs>(args: SelectSubset<T, OrderItemsUpsertArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItems.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemsCountArgs>(
      args?: Subset<T, OrderItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemsAggregateArgs>(args: Subset<T, OrderItemsAggregateArgs>): Prisma.PrismaPromise<GetOrderItemsAggregateType<T>>

    /**
     * Group by OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsGroupByArgs} args - Group by arguments.
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
      T extends OrderItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemsGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItems model
   */
  readonly fields: OrderItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderItems model
   */
  interface OrderItemsFieldRefs {
    readonly id: FieldRef<"OrderItems", 'Int'>
    readonly order_id: FieldRef<"OrderItems", 'Int'>
    readonly product_id: FieldRef<"OrderItems", 'Int'>
    readonly quantity: FieldRef<"OrderItems", 'Int'>
    readonly unit_price: FieldRef<"OrderItems", 'Decimal'>
    readonly discount: FieldRef<"OrderItems", 'Decimal'>
    readonly createdAt: FieldRef<"OrderItems", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderItems", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItems findUnique
   */
  export type OrderItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems findUniqueOrThrow
   */
  export type OrderItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems findFirst
   */
  export type OrderItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderItems findFirstOrThrow
   */
  export type OrderItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderItems findMany
   */
  export type OrderItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderItems create
   */
  export type OrderItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItems.
     */
    data: XOR<OrderItemsCreateInput, OrderItemsUncheckedCreateInput>
  }

  /**
   * OrderItems createMany
   */
  export type OrderItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemsCreateManyInput | OrderItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItems createManyAndReturn
   */
  export type OrderItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemsCreateManyInput | OrderItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItems update
   */
  export type OrderItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItems.
     */
    data: XOR<OrderItemsUpdateInput, OrderItemsUncheckedUpdateInput>
    /**
     * Choose, which OrderItems to update.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems updateMany
   */
  export type OrderItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemsWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItems updateManyAndReturn
   */
  export type OrderItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemsWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItems upsert
   */
  export type OrderItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItems to update in case it exists.
     */
    where: OrderItemsWhereUniqueInput
    /**
     * In case the OrderItems found by the `where` argument doesn't exist, create a new OrderItems with this data.
     */
    create: XOR<OrderItemsCreateInput, OrderItemsUncheckedCreateInput>
    /**
     * In case the OrderItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemsUpdateInput, OrderItemsUncheckedUpdateInput>
  }

  /**
   * OrderItems delete
   */
  export type OrderItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter which OrderItems to delete.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems deleteMany
   */
  export type OrderItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemsWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItems without action
   */
  export type OrderItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
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


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    category_name: 'category_name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    size: 'size',
    color: 'color',
    description: 'description',
    category_id: 'category_id',
    discount_percentage: 'discount_percentage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const StoresScalarFieldEnum: {
    id: 'id',
    store_name: 'store_name',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoresScalarFieldEnum = (typeof StoresScalarFieldEnum)[keyof typeof StoresScalarFieldEnum]


  export const StoreInventoryScalarFieldEnum: {
    id: 'id',
    store_id: 'store_id',
    product_id: 'product_id',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoreInventoryScalarFieldEnum = (typeof StoreInventoryScalarFieldEnum)[keyof typeof StoreInventoryScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    province: 'province',
    district: 'district',
    commune: 'commune',
    address: 'address',
    housing_type: 'housing_type',
    password: 'password',
    refreshToken: 'refreshToken',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const VouchersScalarFieldEnum: {
    id: 'id',
    code: 'code',
    discount_amount: 'discount_amount',
    description: 'description',
    expiry_date: 'expiry_date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VouchersScalarFieldEnum = (typeof VouchersScalarFieldEnum)[keyof typeof VouchersScalarFieldEnum]


  export const UserVouchersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    voucher_id: 'voucher_id',
    is_used: 'is_used',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserVouchersScalarFieldEnum = (typeof UserVouchersScalarFieldEnum)[keyof typeof UserVouchersScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    order_date: 'order_date',
    total_price: 'total_price',
    status: 'status',
    gender: 'gender',
    shipping_method: 'shipping_method',
    payment_method: 'payment_method',
    shipping_fee: 'shipping_fee',
    discount: 'discount',
    housing_type: 'housing_type',
    address: 'address',
    email: 'email',
    phone: 'phone',
    recipient_name: 'recipient_name',
    is_not_self_recipient: 'is_not_self_recipient',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const OrderItemsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    product_id: 'product_id',
    quantity: 'quantity',
    unit_price: 'unit_price',
    discount: 'discount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderItemsScalarFieldEnum = (typeof OrderItemsScalarFieldEnum)[keyof typeof OrderItemsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'HousingType'
   */
  export type EnumHousingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HousingType'>
    


  /**
   * Reference to a field of type 'HousingType[]'
   */
  export type ListEnumHousingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HousingType[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: IntFilter<"Categories"> | number
    category_name?: StringFilter<"Categories"> | string
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    products?: ProductsListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    category_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductsOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    category_name?: StringFilter<"Categories"> | string
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    products?: ProductsListRelationFilter
  }, "id">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    category_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categories"> | number
    category_name?: StringWithAggregatesFilter<"Categories"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    id?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    price?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    size?: StringNullableFilter<"Products"> | string | null
    color?: StringNullableFilter<"Products"> | string | null
    description?: StringNullableFilter<"Products"> | string | null
    category_id?: IntFilter<"Products"> | number
    discount_percentage?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Products"> | Date | string
    updatedAt?: DateTimeFilter<"Products"> | Date | string
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    inventories?: StoreInventoryListRelationFilter
    order_items?: OrderItemsListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    category_id?: SortOrder
    discount_percentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoriesOrderByWithRelationInput
    inventories?: StoreInventoryOrderByRelationAggregateInput
    order_items?: OrderItemsOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    name?: StringFilter<"Products"> | string
    price?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    size?: StringNullableFilter<"Products"> | string | null
    color?: StringNullableFilter<"Products"> | string | null
    description?: StringNullableFilter<"Products"> | string | null
    category_id?: IntFilter<"Products"> | number
    discount_percentage?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Products"> | Date | string
    updatedAt?: DateTimeFilter<"Products"> | Date | string
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    inventories?: StoreInventoryListRelationFilter
    order_items?: OrderItemsListRelationFilter
  }, "id">

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    category_id?: SortOrder
    discount_percentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Products"> | number
    name?: StringWithAggregatesFilter<"Products"> | string
    price?: DecimalWithAggregatesFilter<"Products"> | Decimal | DecimalJsLike | number | string
    size?: StringNullableWithAggregatesFilter<"Products"> | string | null
    color?: StringNullableWithAggregatesFilter<"Products"> | string | null
    description?: StringNullableWithAggregatesFilter<"Products"> | string | null
    category_id?: IntWithAggregatesFilter<"Products"> | number
    discount_percentage?: DecimalWithAggregatesFilter<"Products"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Products"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Products"> | Date | string
  }

  export type StoresWhereInput = {
    AND?: StoresWhereInput | StoresWhereInput[]
    OR?: StoresWhereInput[]
    NOT?: StoresWhereInput | StoresWhereInput[]
    id?: IntFilter<"Stores"> | number
    store_name?: StringFilter<"Stores"> | string
    address?: StringNullableFilter<"Stores"> | string | null
    createdAt?: DateTimeFilter<"Stores"> | Date | string
    updatedAt?: DateTimeFilter<"Stores"> | Date | string
    inventories?: StoreInventoryListRelationFilter
  }

  export type StoresOrderByWithRelationInput = {
    id?: SortOrder
    store_name?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inventories?: StoreInventoryOrderByRelationAggregateInput
  }

  export type StoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoresWhereInput | StoresWhereInput[]
    OR?: StoresWhereInput[]
    NOT?: StoresWhereInput | StoresWhereInput[]
    store_name?: StringFilter<"Stores"> | string
    address?: StringNullableFilter<"Stores"> | string | null
    createdAt?: DateTimeFilter<"Stores"> | Date | string
    updatedAt?: DateTimeFilter<"Stores"> | Date | string
    inventories?: StoreInventoryListRelationFilter
  }, "id">

  export type StoresOrderByWithAggregationInput = {
    id?: SortOrder
    store_name?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoresCountOrderByAggregateInput
    _avg?: StoresAvgOrderByAggregateInput
    _max?: StoresMaxOrderByAggregateInput
    _min?: StoresMinOrderByAggregateInput
    _sum?: StoresSumOrderByAggregateInput
  }

  export type StoresScalarWhereWithAggregatesInput = {
    AND?: StoresScalarWhereWithAggregatesInput | StoresScalarWhereWithAggregatesInput[]
    OR?: StoresScalarWhereWithAggregatesInput[]
    NOT?: StoresScalarWhereWithAggregatesInput | StoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Stores"> | number
    store_name?: StringWithAggregatesFilter<"Stores"> | string
    address?: StringNullableWithAggregatesFilter<"Stores"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Stores"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Stores"> | Date | string
  }

  export type StoreInventoryWhereInput = {
    AND?: StoreInventoryWhereInput | StoreInventoryWhereInput[]
    OR?: StoreInventoryWhereInput[]
    NOT?: StoreInventoryWhereInput | StoreInventoryWhereInput[]
    id?: IntFilter<"StoreInventory"> | number
    store_id?: IntFilter<"StoreInventory"> | number
    product_id?: IntFilter<"StoreInventory"> | number
    quantity?: IntFilter<"StoreInventory"> | number
    createdAt?: DateTimeFilter<"StoreInventory"> | Date | string
    updatedAt?: DateTimeFilter<"StoreInventory"> | Date | string
    store?: XOR<StoresScalarRelationFilter, StoresWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type StoreInventoryOrderByWithRelationInput = {
    id?: SortOrder
    store_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoresOrderByWithRelationInput
    product?: ProductsOrderByWithRelationInput
  }

  export type StoreInventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoreInventoryWhereInput | StoreInventoryWhereInput[]
    OR?: StoreInventoryWhereInput[]
    NOT?: StoreInventoryWhereInput | StoreInventoryWhereInput[]
    store_id?: IntFilter<"StoreInventory"> | number
    product_id?: IntFilter<"StoreInventory"> | number
    quantity?: IntFilter<"StoreInventory"> | number
    createdAt?: DateTimeFilter<"StoreInventory"> | Date | string
    updatedAt?: DateTimeFilter<"StoreInventory"> | Date | string
    store?: XOR<StoresScalarRelationFilter, StoresWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "id">

  export type StoreInventoryOrderByWithAggregationInput = {
    id?: SortOrder
    store_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoreInventoryCountOrderByAggregateInput
    _avg?: StoreInventoryAvgOrderByAggregateInput
    _max?: StoreInventoryMaxOrderByAggregateInput
    _min?: StoreInventoryMinOrderByAggregateInput
    _sum?: StoreInventorySumOrderByAggregateInput
  }

  export type StoreInventoryScalarWhereWithAggregatesInput = {
    AND?: StoreInventoryScalarWhereWithAggregatesInput | StoreInventoryScalarWhereWithAggregatesInput[]
    OR?: StoreInventoryScalarWhereWithAggregatesInput[]
    NOT?: StoreInventoryScalarWhereWithAggregatesInput | StoreInventoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StoreInventory"> | number
    store_id?: IntWithAggregatesFilter<"StoreInventory"> | number
    product_id?: IntWithAggregatesFilter<"StoreInventory"> | number
    quantity?: IntWithAggregatesFilter<"StoreInventory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StoreInventory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StoreInventory"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    province?: StringFilter<"Users"> | string
    district?: StringFilter<"Users"> | string
    commune?: StringFilter<"Users"> | string
    address?: StringFilter<"Users"> | string
    housing_type?: EnumHousingTypeFilter<"Users"> | $Enums.HousingType
    password?: StringFilter<"Users"> | string
    refreshToken?: StringNullableFilter<"Users"> | string | null
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    vouchers?: UserVouchersListRelationFilter
    orders?: OrdersListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    district?: SortOrder
    commune?: SortOrder
    address?: SortOrder
    housing_type?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vouchers?: UserVouchersOrderByRelationAggregateInput
    orders?: OrdersOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    province?: StringFilter<"Users"> | string
    district?: StringFilter<"Users"> | string
    commune?: StringFilter<"Users"> | string
    address?: StringFilter<"Users"> | string
    housing_type?: EnumHousingTypeFilter<"Users"> | $Enums.HousingType
    password?: StringFilter<"Users"> | string
    refreshToken?: StringNullableFilter<"Users"> | string | null
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    vouchers?: UserVouchersListRelationFilter
    orders?: OrdersListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    district?: SortOrder
    commune?: SortOrder
    address?: SortOrder
    housing_type?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringWithAggregatesFilter<"Users"> | string
    province?: StringWithAggregatesFilter<"Users"> | string
    district?: StringWithAggregatesFilter<"Users"> | string
    commune?: StringWithAggregatesFilter<"Users"> | string
    address?: StringWithAggregatesFilter<"Users"> | string
    housing_type?: EnumHousingTypeWithAggregatesFilter<"Users"> | $Enums.HousingType
    password?: StringWithAggregatesFilter<"Users"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type VouchersWhereInput = {
    AND?: VouchersWhereInput | VouchersWhereInput[]
    OR?: VouchersWhereInput[]
    NOT?: VouchersWhereInput | VouchersWhereInput[]
    id?: IntFilter<"Vouchers"> | number
    code?: StringFilter<"Vouchers"> | string
    discount_amount?: DecimalNullableFilter<"Vouchers"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"Vouchers"> | string | null
    expiry_date?: DateTimeFilter<"Vouchers"> | Date | string
    createdAt?: DateTimeFilter<"Vouchers"> | Date | string
    updatedAt?: DateTimeFilter<"Vouchers"> | Date | string
    user_vouchers?: UserVouchersListRelationFilter
  }

  export type VouchersOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    discount_amount?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    expiry_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_vouchers?: UserVouchersOrderByRelationAggregateInput
  }

  export type VouchersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: VouchersWhereInput | VouchersWhereInput[]
    OR?: VouchersWhereInput[]
    NOT?: VouchersWhereInput | VouchersWhereInput[]
    discount_amount?: DecimalNullableFilter<"Vouchers"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"Vouchers"> | string | null
    expiry_date?: DateTimeFilter<"Vouchers"> | Date | string
    createdAt?: DateTimeFilter<"Vouchers"> | Date | string
    updatedAt?: DateTimeFilter<"Vouchers"> | Date | string
    user_vouchers?: UserVouchersListRelationFilter
  }, "id" | "code">

  export type VouchersOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    discount_amount?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    expiry_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VouchersCountOrderByAggregateInput
    _avg?: VouchersAvgOrderByAggregateInput
    _max?: VouchersMaxOrderByAggregateInput
    _min?: VouchersMinOrderByAggregateInput
    _sum?: VouchersSumOrderByAggregateInput
  }

  export type VouchersScalarWhereWithAggregatesInput = {
    AND?: VouchersScalarWhereWithAggregatesInput | VouchersScalarWhereWithAggregatesInput[]
    OR?: VouchersScalarWhereWithAggregatesInput[]
    NOT?: VouchersScalarWhereWithAggregatesInput | VouchersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vouchers"> | number
    code?: StringWithAggregatesFilter<"Vouchers"> | string
    discount_amount?: DecimalNullableWithAggregatesFilter<"Vouchers"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableWithAggregatesFilter<"Vouchers"> | string | null
    expiry_date?: DateTimeWithAggregatesFilter<"Vouchers"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Vouchers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vouchers"> | Date | string
  }

  export type UserVouchersWhereInput = {
    AND?: UserVouchersWhereInput | UserVouchersWhereInput[]
    OR?: UserVouchersWhereInput[]
    NOT?: UserVouchersWhereInput | UserVouchersWhereInput[]
    id?: IntFilter<"UserVouchers"> | number
    user_id?: IntFilter<"UserVouchers"> | number
    voucher_id?: IntFilter<"UserVouchers"> | number
    is_used?: BoolFilter<"UserVouchers"> | boolean
    createdAt?: DateTimeFilter<"UserVouchers"> | Date | string
    updatedAt?: DateTimeFilter<"UserVouchers"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    voucher?: XOR<VouchersScalarRelationFilter, VouchersWhereInput>
  }

  export type UserVouchersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    voucher_id?: SortOrder
    is_used?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    voucher?: VouchersOrderByWithRelationInput
  }

  export type UserVouchersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserVouchersWhereInput | UserVouchersWhereInput[]
    OR?: UserVouchersWhereInput[]
    NOT?: UserVouchersWhereInput | UserVouchersWhereInput[]
    user_id?: IntFilter<"UserVouchers"> | number
    voucher_id?: IntFilter<"UserVouchers"> | number
    is_used?: BoolFilter<"UserVouchers"> | boolean
    createdAt?: DateTimeFilter<"UserVouchers"> | Date | string
    updatedAt?: DateTimeFilter<"UserVouchers"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    voucher?: XOR<VouchersScalarRelationFilter, VouchersWhereInput>
  }, "id">

  export type UserVouchersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    voucher_id?: SortOrder
    is_used?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserVouchersCountOrderByAggregateInput
    _avg?: UserVouchersAvgOrderByAggregateInput
    _max?: UserVouchersMaxOrderByAggregateInput
    _min?: UserVouchersMinOrderByAggregateInput
    _sum?: UserVouchersSumOrderByAggregateInput
  }

  export type UserVouchersScalarWhereWithAggregatesInput = {
    AND?: UserVouchersScalarWhereWithAggregatesInput | UserVouchersScalarWhereWithAggregatesInput[]
    OR?: UserVouchersScalarWhereWithAggregatesInput[]
    NOT?: UserVouchersScalarWhereWithAggregatesInput | UserVouchersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserVouchers"> | number
    user_id?: IntWithAggregatesFilter<"UserVouchers"> | number
    voucher_id?: IntWithAggregatesFilter<"UserVouchers"> | number
    is_used?: BoolWithAggregatesFilter<"UserVouchers"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserVouchers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserVouchers"> | Date | string
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: IntFilter<"Orders"> | number
    user_id?: IntFilter<"Orders"> | number
    order_date?: DateTimeFilter<"Orders"> | Date | string
    total_price?: DecimalNullableFilter<"Orders"> | Decimal | DecimalJsLike | number | string | null
    status?: StringFilter<"Orders"> | string
    gender?: StringFilter<"Orders"> | string
    shipping_method?: StringFilter<"Orders"> | string
    payment_method?: StringFilter<"Orders"> | string
    shipping_fee?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    housing_type?: StringFilter<"Orders"> | string
    address?: StringFilter<"Orders"> | string
    email?: StringFilter<"Orders"> | string
    phone?: StringFilter<"Orders"> | string
    recipient_name?: StringFilter<"Orders"> | string
    is_not_self_recipient?: BoolFilter<"Orders"> | boolean
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    order_items?: OrderItemsListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_date?: SortOrder
    total_price?: SortOrderInput | SortOrder
    status?: SortOrder
    gender?: SortOrder
    shipping_method?: SortOrder
    payment_method?: SortOrder
    shipping_fee?: SortOrder
    discount?: SortOrder
    housing_type?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    recipient_name?: SortOrder
    is_not_self_recipient?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    order_items?: OrderItemsOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    user_id?: IntFilter<"Orders"> | number
    order_date?: DateTimeFilter<"Orders"> | Date | string
    total_price?: DecimalNullableFilter<"Orders"> | Decimal | DecimalJsLike | number | string | null
    status?: StringFilter<"Orders"> | string
    gender?: StringFilter<"Orders"> | string
    shipping_method?: StringFilter<"Orders"> | string
    payment_method?: StringFilter<"Orders"> | string
    shipping_fee?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    housing_type?: StringFilter<"Orders"> | string
    address?: StringFilter<"Orders"> | string
    email?: StringFilter<"Orders"> | string
    phone?: StringFilter<"Orders"> | string
    recipient_name?: StringFilter<"Orders"> | string
    is_not_self_recipient?: BoolFilter<"Orders"> | boolean
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    order_items?: OrderItemsListRelationFilter
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_date?: SortOrder
    total_price?: SortOrderInput | SortOrder
    status?: SortOrder
    gender?: SortOrder
    shipping_method?: SortOrder
    payment_method?: SortOrder
    shipping_fee?: SortOrder
    discount?: SortOrder
    housing_type?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    recipient_name?: SortOrder
    is_not_self_recipient?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orders"> | number
    user_id?: IntWithAggregatesFilter<"Orders"> | number
    order_date?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    total_price?: DecimalNullableWithAggregatesFilter<"Orders"> | Decimal | DecimalJsLike | number | string | null
    status?: StringWithAggregatesFilter<"Orders"> | string
    gender?: StringWithAggregatesFilter<"Orders"> | string
    shipping_method?: StringWithAggregatesFilter<"Orders"> | string
    payment_method?: StringWithAggregatesFilter<"Orders"> | string
    shipping_fee?: DecimalWithAggregatesFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalWithAggregatesFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    housing_type?: StringWithAggregatesFilter<"Orders"> | string
    address?: StringWithAggregatesFilter<"Orders"> | string
    email?: StringWithAggregatesFilter<"Orders"> | string
    phone?: StringWithAggregatesFilter<"Orders"> | string
    recipient_name?: StringWithAggregatesFilter<"Orders"> | string
    is_not_self_recipient?: BoolWithAggregatesFilter<"Orders"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
  }

  export type OrderItemsWhereInput = {
    AND?: OrderItemsWhereInput | OrderItemsWhereInput[]
    OR?: OrderItemsWhereInput[]
    NOT?: OrderItemsWhereInput | OrderItemsWhereInput[]
    id?: IntFilter<"OrderItems"> | number
    order_id?: IntFilter<"OrderItems"> | number
    product_id?: IntFilter<"OrderItems"> | number
    quantity?: IntFilter<"OrderItems"> | number
    unit_price?: DecimalFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItems"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItems"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type OrderItemsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrdersOrderByWithRelationInput
    product?: ProductsOrderByWithRelationInput
  }

  export type OrderItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderItemsWhereInput | OrderItemsWhereInput[]
    OR?: OrderItemsWhereInput[]
    NOT?: OrderItemsWhereInput | OrderItemsWhereInput[]
    order_id?: IntFilter<"OrderItems"> | number
    product_id?: IntFilter<"OrderItems"> | number
    quantity?: IntFilter<"OrderItems"> | number
    unit_price?: DecimalFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItems"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItems"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "id">

  export type OrderItemsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderItemsCountOrderByAggregateInput
    _avg?: OrderItemsAvgOrderByAggregateInput
    _max?: OrderItemsMaxOrderByAggregateInput
    _min?: OrderItemsMinOrderByAggregateInput
    _sum?: OrderItemsSumOrderByAggregateInput
  }

  export type OrderItemsScalarWhereWithAggregatesInput = {
    AND?: OrderItemsScalarWhereWithAggregatesInput | OrderItemsScalarWhereWithAggregatesInput[]
    OR?: OrderItemsScalarWhereWithAggregatesInput[]
    NOT?: OrderItemsScalarWhereWithAggregatesInput | OrderItemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderItems"> | number
    order_id?: IntWithAggregatesFilter<"OrderItems"> | number
    product_id?: IntWithAggregatesFilter<"OrderItems"> | number
    quantity?: IntWithAggregatesFilter<"OrderItems"> | number
    unit_price?: DecimalWithAggregatesFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalWithAggregatesFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"OrderItems"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderItems"> | Date | string
  }

  export type CategoriesCreateInput = {
    category_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductsCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: number
    category_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: number
    category_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesUpdateManyMutationInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    size?: string | null
    color?: string | null
    description?: string | null
    discount_percentage?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoriesCreateNestedOneWithoutProductsInput
    inventories?: StoreInventoryCreateNestedManyWithoutProductInput
    order_items?: OrderItemsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    size?: string | null
    color?: string | null
    description?: string | null
    category_id: number
    discount_percentage?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventories?: StoreInventoryUncheckedCreateNestedManyWithoutProductInput
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discount_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    inventories?: StoreInventoryUpdateManyWithoutProductNestedInput
    order_items?: OrderItemsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    discount_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: StoreInventoryUncheckedUpdateManyWithoutProductNestedInput
    order_items?: OrderItemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateManyInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    size?: string | null
    color?: string | null
    description?: string | null
    category_id: number
    discount_percentage?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discount_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    discount_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoresCreateInput = {
    store_name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventories?: StoreInventoryCreateNestedManyWithoutStoreInput
  }

  export type StoresUncheckedCreateInput = {
    id?: number
    store_name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventories?: StoreInventoryUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoresUpdateInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: StoreInventoryUpdateManyWithoutStoreNestedInput
  }

  export type StoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: StoreInventoryUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoresCreateManyInput = {
    id?: number
    store_name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoresUpdateManyMutationInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreInventoryCreateInput = {
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoresCreateNestedOneWithoutInventoriesInput
    product: ProductsCreateNestedOneWithoutInventoriesInput
  }

  export type StoreInventoryUncheckedCreateInput = {
    id?: number
    store_id: number
    product_id: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreInventoryUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoresUpdateOneRequiredWithoutInventoriesNestedInput
    product?: ProductsUpdateOneRequiredWithoutInventoriesNestedInput
  }

  export type StoreInventoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreInventoryCreateManyInput = {
    id?: number
    store_id: number
    product_id: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreInventoryUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreInventoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    name: string
    email: string
    phone: string
    province: string
    district: string
    commune: string
    address: string
    housing_type: $Enums.HousingType
    password: string
    refreshToken?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    vouchers?: UserVouchersCreateNestedManyWithoutUserInput
    orders?: OrdersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    province: string
    district: string
    commune: string
    address: string
    housing_type: $Enums.HousingType
    password: string
    refreshToken?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    vouchers?: UserVouchersUncheckedCreateNestedManyWithoutUserInput
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    housing_type?: EnumHousingTypeFieldUpdateOperationsInput | $Enums.HousingType
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vouchers?: UserVouchersUpdateManyWithoutUserNestedInput
    orders?: OrdersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    housing_type?: EnumHousingTypeFieldUpdateOperationsInput | $Enums.HousingType
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vouchers?: UserVouchersUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    province: string
    district: string
    commune: string
    address: string
    housing_type: $Enums.HousingType
    password: string
    refreshToken?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    housing_type?: EnumHousingTypeFieldUpdateOperationsInput | $Enums.HousingType
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    housing_type?: EnumHousingTypeFieldUpdateOperationsInput | $Enums.HousingType
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VouchersCreateInput = {
    code: string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    expiry_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_vouchers?: UserVouchersCreateNestedManyWithoutVoucherInput
  }

  export type VouchersUncheckedCreateInput = {
    id?: number
    code: string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    expiry_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_vouchers?: UserVouchersUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VouchersUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_vouchers?: UserVouchersUpdateManyWithoutVoucherNestedInput
  }

  export type VouchersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_vouchers?: UserVouchersUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type VouchersCreateManyInput = {
    id?: number
    code: string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    expiry_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VouchersUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VouchersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVouchersCreateInput = {
    is_used?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutVouchersInput
    voucher: VouchersCreateNestedOneWithoutUser_vouchersInput
  }

  export type UserVouchersUncheckedCreateInput = {
    id?: number
    user_id: number
    voucher_id: number
    is_used?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVouchersUpdateInput = {
    is_used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutVouchersNestedInput
    voucher?: VouchersUpdateOneRequiredWithoutUser_vouchersNestedInput
  }

  export type UserVouchersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    voucher_id?: IntFieldUpdateOperationsInput | number
    is_used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVouchersCreateManyInput = {
    id?: number
    user_id: number
    voucher_id: number
    is_used?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVouchersUpdateManyMutationInput = {
    is_used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVouchersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    voucher_id?: IntFieldUpdateOperationsInput | number
    is_used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateInput = {
    order_date?: Date | string
    total_price?: Decimal | DecimalJsLike | number | string | null
    status: string
    gender: string
    shipping_method: string
    payment_method: string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    housing_type: string
    address: string
    email: string
    phone: string
    recipient_name: string
    is_not_self_recipient?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutOrdersInput
    order_items?: OrderItemsCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: number
    user_id: number
    order_date?: Date | string
    total_price?: Decimal | DecimalJsLike | number | string | null
    status: string
    gender: string
    shipping_method: string
    payment_method: string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    housing_type: string
    address: string
    email: string
    phone: string
    recipient_name: string
    is_not_self_recipient?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersUpdateInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    shipping_method?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    housing_type?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    is_not_self_recipient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutOrdersNestedInput
    order_items?: OrderItemsUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    shipping_method?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    housing_type?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    is_not_self_recipient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    id?: number
    user_id: number
    order_date?: Date | string
    total_price?: Decimal | DecimalJsLike | number | string | null
    status: string
    gender: string
    shipping_method: string
    payment_method: string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    housing_type: string
    address: string
    email: string
    phone: string
    recipient_name: string
    is_not_self_recipient?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersUpdateManyMutationInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    shipping_method?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    housing_type?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    is_not_self_recipient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    shipping_method?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    housing_type?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    is_not_self_recipient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsCreateInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrdersCreateNestedOneWithoutOrder_itemsInput
    product: ProductsCreateNestedOneWithoutOrder_itemsInput
  }

  export type OrderItemsUncheckedCreateInput = {
    id?: number
    order_id: number
    product_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutOrder_itemsNestedInput
    product?: ProductsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type OrderItemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsCreateManyInput = {
    id?: number
    order_id: number
    product_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    category_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    category_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    category_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type StoreInventoryListRelationFilter = {
    every?: StoreInventoryWhereInput
    some?: StoreInventoryWhereInput
    none?: StoreInventoryWhereInput
  }

  export type OrderItemsListRelationFilter = {
    every?: OrderItemsWhereInput
    some?: OrderItemsWhereInput
    none?: OrderItemsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StoreInventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    discount_percentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    category_id?: SortOrder
    discount_percentage?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    discount_percentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    discount_percentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    category_id?: SortOrder
    discount_percentage?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StoresCountOrderByAggregateInput = {
    id?: SortOrder
    store_name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoresMaxOrderByAggregateInput = {
    id?: SortOrder
    store_name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoresMinOrderByAggregateInput = {
    id?: SortOrder
    store_name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoresSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoresScalarRelationFilter = {
    is?: StoresWhereInput
    isNot?: StoresWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type StoreInventoryCountOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreInventoryAvgOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type StoreInventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreInventoryMinOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreInventorySumOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type EnumHousingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HousingType | EnumHousingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HousingType[] | ListEnumHousingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HousingType[] | ListEnumHousingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHousingTypeFilter<$PrismaModel> | $Enums.HousingType
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserVouchersListRelationFilter = {
    every?: UserVouchersWhereInput
    some?: UserVouchersWhereInput
    none?: UserVouchersWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type UserVouchersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    district?: SortOrder
    commune?: SortOrder
    address?: SortOrder
    housing_type?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    district?: SortOrder
    commune?: SortOrder
    address?: SortOrder
    housing_type?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    district?: SortOrder
    commune?: SortOrder
    address?: SortOrder
    housing_type?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumHousingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HousingType | EnumHousingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HousingType[] | ListEnumHousingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HousingType[] | ListEnumHousingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHousingTypeWithAggregatesFilter<$PrismaModel> | $Enums.HousingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHousingTypeFilter<$PrismaModel>
    _max?: NestedEnumHousingTypeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type VouchersCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discount_amount?: SortOrder
    description?: SortOrder
    expiry_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VouchersAvgOrderByAggregateInput = {
    id?: SortOrder
    discount_amount?: SortOrder
  }

  export type VouchersMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discount_amount?: SortOrder
    description?: SortOrder
    expiry_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VouchersMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discount_amount?: SortOrder
    description?: SortOrder
    expiry_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VouchersSumOrderByAggregateInput = {
    id?: SortOrder
    discount_amount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type VouchersScalarRelationFilter = {
    is?: VouchersWhereInput
    isNot?: VouchersWhereInput
  }

  export type UserVouchersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    voucher_id?: SortOrder
    is_used?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVouchersAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    voucher_id?: SortOrder
  }

  export type UserVouchersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    voucher_id?: SortOrder
    is_used?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVouchersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    voucher_id?: SortOrder
    is_used?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVouchersSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    voucher_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_date?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    gender?: SortOrder
    shipping_method?: SortOrder
    payment_method?: SortOrder
    shipping_fee?: SortOrder
    discount?: SortOrder
    housing_type?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    recipient_name?: SortOrder
    is_not_self_recipient?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    shipping_fee?: SortOrder
    discount?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_date?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    gender?: SortOrder
    shipping_method?: SortOrder
    payment_method?: SortOrder
    shipping_fee?: SortOrder
    discount?: SortOrder
    housing_type?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    recipient_name?: SortOrder
    is_not_self_recipient?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_date?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    gender?: SortOrder
    shipping_method?: SortOrder
    payment_method?: SortOrder
    shipping_fee?: SortOrder
    discount?: SortOrder
    housing_type?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    recipient_name?: SortOrder
    is_not_self_recipient?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    shipping_fee?: SortOrder
    discount?: SortOrder
  }

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type OrderItemsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemsAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    discount?: SortOrder
  }

  export type OrderItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemsSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    discount?: SortOrder
  }

  export type ProductsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type CategoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput
    connect?: CategoriesWhereUniqueInput
  }

  export type StoreInventoryCreateNestedManyWithoutProductInput = {
    create?: XOR<StoreInventoryCreateWithoutProductInput, StoreInventoryUncheckedCreateWithoutProductInput> | StoreInventoryCreateWithoutProductInput[] | StoreInventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StoreInventoryCreateOrConnectWithoutProductInput | StoreInventoryCreateOrConnectWithoutProductInput[]
    createMany?: StoreInventoryCreateManyProductInputEnvelope
    connect?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
  }

  export type OrderItemsCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput> | OrderItemsCreateWithoutProductInput[] | OrderItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProductInput | OrderItemsCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemsCreateManyProductInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type StoreInventoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<StoreInventoryCreateWithoutProductInput, StoreInventoryUncheckedCreateWithoutProductInput> | StoreInventoryCreateWithoutProductInput[] | StoreInventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StoreInventoryCreateOrConnectWithoutProductInput | StoreInventoryCreateOrConnectWithoutProductInput[]
    createMany?: StoreInventoryCreateManyProductInputEnvelope
    connect?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
  }

  export type OrderItemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput> | OrderItemsCreateWithoutProductInput[] | OrderItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProductInput | OrderItemsCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemsCreateManyProductInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoriesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput
    upsert?: CategoriesUpsertWithoutProductsInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutProductsInput, CategoriesUpdateWithoutProductsInput>, CategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type StoreInventoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<StoreInventoryCreateWithoutProductInput, StoreInventoryUncheckedCreateWithoutProductInput> | StoreInventoryCreateWithoutProductInput[] | StoreInventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StoreInventoryCreateOrConnectWithoutProductInput | StoreInventoryCreateOrConnectWithoutProductInput[]
    upsert?: StoreInventoryUpsertWithWhereUniqueWithoutProductInput | StoreInventoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StoreInventoryCreateManyProductInputEnvelope
    set?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
    disconnect?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
    delete?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
    connect?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
    update?: StoreInventoryUpdateWithWhereUniqueWithoutProductInput | StoreInventoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StoreInventoryUpdateManyWithWhereWithoutProductInput | StoreInventoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StoreInventoryScalarWhereInput | StoreInventoryScalarWhereInput[]
  }

  export type OrderItemsUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput> | OrderItemsCreateWithoutProductInput[] | OrderItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProductInput | OrderItemsCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutProductInput | OrderItemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemsCreateManyProductInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutProductInput | OrderItemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutProductInput | OrderItemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type StoreInventoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<StoreInventoryCreateWithoutProductInput, StoreInventoryUncheckedCreateWithoutProductInput> | StoreInventoryCreateWithoutProductInput[] | StoreInventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StoreInventoryCreateOrConnectWithoutProductInput | StoreInventoryCreateOrConnectWithoutProductInput[]
    upsert?: StoreInventoryUpsertWithWhereUniqueWithoutProductInput | StoreInventoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StoreInventoryCreateManyProductInputEnvelope
    set?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
    disconnect?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
    delete?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
    connect?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
    update?: StoreInventoryUpdateWithWhereUniqueWithoutProductInput | StoreInventoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StoreInventoryUpdateManyWithWhereWithoutProductInput | StoreInventoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StoreInventoryScalarWhereInput | StoreInventoryScalarWhereInput[]
  }

  export type OrderItemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput> | OrderItemsCreateWithoutProductInput[] | OrderItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProductInput | OrderItemsCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutProductInput | OrderItemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemsCreateManyProductInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutProductInput | OrderItemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutProductInput | OrderItemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type StoreInventoryCreateNestedManyWithoutStoreInput = {
    create?: XOR<StoreInventoryCreateWithoutStoreInput, StoreInventoryUncheckedCreateWithoutStoreInput> | StoreInventoryCreateWithoutStoreInput[] | StoreInventoryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreInventoryCreateOrConnectWithoutStoreInput | StoreInventoryCreateOrConnectWithoutStoreInput[]
    createMany?: StoreInventoryCreateManyStoreInputEnvelope
    connect?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
  }

  export type StoreInventoryUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<StoreInventoryCreateWithoutStoreInput, StoreInventoryUncheckedCreateWithoutStoreInput> | StoreInventoryCreateWithoutStoreInput[] | StoreInventoryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreInventoryCreateOrConnectWithoutStoreInput | StoreInventoryCreateOrConnectWithoutStoreInput[]
    createMany?: StoreInventoryCreateManyStoreInputEnvelope
    connect?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
  }

  export type StoreInventoryUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StoreInventoryCreateWithoutStoreInput, StoreInventoryUncheckedCreateWithoutStoreInput> | StoreInventoryCreateWithoutStoreInput[] | StoreInventoryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreInventoryCreateOrConnectWithoutStoreInput | StoreInventoryCreateOrConnectWithoutStoreInput[]
    upsert?: StoreInventoryUpsertWithWhereUniqueWithoutStoreInput | StoreInventoryUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StoreInventoryCreateManyStoreInputEnvelope
    set?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
    disconnect?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
    delete?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
    connect?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
    update?: StoreInventoryUpdateWithWhereUniqueWithoutStoreInput | StoreInventoryUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StoreInventoryUpdateManyWithWhereWithoutStoreInput | StoreInventoryUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StoreInventoryScalarWhereInput | StoreInventoryScalarWhereInput[]
  }

  export type StoreInventoryUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StoreInventoryCreateWithoutStoreInput, StoreInventoryUncheckedCreateWithoutStoreInput> | StoreInventoryCreateWithoutStoreInput[] | StoreInventoryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreInventoryCreateOrConnectWithoutStoreInput | StoreInventoryCreateOrConnectWithoutStoreInput[]
    upsert?: StoreInventoryUpsertWithWhereUniqueWithoutStoreInput | StoreInventoryUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StoreInventoryCreateManyStoreInputEnvelope
    set?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
    disconnect?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
    delete?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
    connect?: StoreInventoryWhereUniqueInput | StoreInventoryWhereUniqueInput[]
    update?: StoreInventoryUpdateWithWhereUniqueWithoutStoreInput | StoreInventoryUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StoreInventoryUpdateManyWithWhereWithoutStoreInput | StoreInventoryUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StoreInventoryScalarWhereInput | StoreInventoryScalarWhereInput[]
  }

  export type StoresCreateNestedOneWithoutInventoriesInput = {
    create?: XOR<StoresCreateWithoutInventoriesInput, StoresUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: StoresCreateOrConnectWithoutInventoriesInput
    connect?: StoresWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutInventoriesInput = {
    create?: XOR<ProductsCreateWithoutInventoriesInput, ProductsUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutInventoriesInput
    connect?: ProductsWhereUniqueInput
  }

  export type StoresUpdateOneRequiredWithoutInventoriesNestedInput = {
    create?: XOR<StoresCreateWithoutInventoriesInput, StoresUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: StoresCreateOrConnectWithoutInventoriesInput
    upsert?: StoresUpsertWithoutInventoriesInput
    connect?: StoresWhereUniqueInput
    update?: XOR<XOR<StoresUpdateToOneWithWhereWithoutInventoriesInput, StoresUpdateWithoutInventoriesInput>, StoresUncheckedUpdateWithoutInventoriesInput>
  }

  export type ProductsUpdateOneRequiredWithoutInventoriesNestedInput = {
    create?: XOR<ProductsCreateWithoutInventoriesInput, ProductsUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutInventoriesInput
    upsert?: ProductsUpsertWithoutInventoriesInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutInventoriesInput, ProductsUpdateWithoutInventoriesInput>, ProductsUncheckedUpdateWithoutInventoriesInput>
  }

  export type UserVouchersCreateNestedManyWithoutUserInput = {
    create?: XOR<UserVouchersCreateWithoutUserInput, UserVouchersUncheckedCreateWithoutUserInput> | UserVouchersCreateWithoutUserInput[] | UserVouchersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVouchersCreateOrConnectWithoutUserInput | UserVouchersCreateOrConnectWithoutUserInput[]
    createMany?: UserVouchersCreateManyUserInputEnvelope
    connect?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type UserVouchersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserVouchersCreateWithoutUserInput, UserVouchersUncheckedCreateWithoutUserInput> | UserVouchersCreateWithoutUserInput[] | UserVouchersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVouchersCreateOrConnectWithoutUserInput | UserVouchersCreateOrConnectWithoutUserInput[]
    createMany?: UserVouchersCreateManyUserInputEnvelope
    connect?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type EnumHousingTypeFieldUpdateOperationsInput = {
    set?: $Enums.HousingType
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserVouchersUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserVouchersCreateWithoutUserInput, UserVouchersUncheckedCreateWithoutUserInput> | UserVouchersCreateWithoutUserInput[] | UserVouchersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVouchersCreateOrConnectWithoutUserInput | UserVouchersCreateOrConnectWithoutUserInput[]
    upsert?: UserVouchersUpsertWithWhereUniqueWithoutUserInput | UserVouchersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserVouchersCreateManyUserInputEnvelope
    set?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
    disconnect?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
    delete?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
    connect?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
    update?: UserVouchersUpdateWithWhereUniqueWithoutUserInput | UserVouchersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserVouchersUpdateManyWithWhereWithoutUserInput | UserVouchersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserVouchersScalarWhereInput | UserVouchersScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type UserVouchersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserVouchersCreateWithoutUserInput, UserVouchersUncheckedCreateWithoutUserInput> | UserVouchersCreateWithoutUserInput[] | UserVouchersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVouchersCreateOrConnectWithoutUserInput | UserVouchersCreateOrConnectWithoutUserInput[]
    upsert?: UserVouchersUpsertWithWhereUniqueWithoutUserInput | UserVouchersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserVouchersCreateManyUserInputEnvelope
    set?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
    disconnect?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
    delete?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
    connect?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
    update?: UserVouchersUpdateWithWhereUniqueWithoutUserInput | UserVouchersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserVouchersUpdateManyWithWhereWithoutUserInput | UserVouchersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserVouchersScalarWhereInput | UserVouchersScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type UserVouchersCreateNestedManyWithoutVoucherInput = {
    create?: XOR<UserVouchersCreateWithoutVoucherInput, UserVouchersUncheckedCreateWithoutVoucherInput> | UserVouchersCreateWithoutVoucherInput[] | UserVouchersUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: UserVouchersCreateOrConnectWithoutVoucherInput | UserVouchersCreateOrConnectWithoutVoucherInput[]
    createMany?: UserVouchersCreateManyVoucherInputEnvelope
    connect?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
  }

  export type UserVouchersUncheckedCreateNestedManyWithoutVoucherInput = {
    create?: XOR<UserVouchersCreateWithoutVoucherInput, UserVouchersUncheckedCreateWithoutVoucherInput> | UserVouchersCreateWithoutVoucherInput[] | UserVouchersUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: UserVouchersCreateOrConnectWithoutVoucherInput | UserVouchersCreateOrConnectWithoutVoucherInput[]
    createMany?: UserVouchersCreateManyVoucherInputEnvelope
    connect?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserVouchersUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<UserVouchersCreateWithoutVoucherInput, UserVouchersUncheckedCreateWithoutVoucherInput> | UserVouchersCreateWithoutVoucherInput[] | UserVouchersUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: UserVouchersCreateOrConnectWithoutVoucherInput | UserVouchersCreateOrConnectWithoutVoucherInput[]
    upsert?: UserVouchersUpsertWithWhereUniqueWithoutVoucherInput | UserVouchersUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: UserVouchersCreateManyVoucherInputEnvelope
    set?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
    disconnect?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
    delete?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
    connect?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
    update?: UserVouchersUpdateWithWhereUniqueWithoutVoucherInput | UserVouchersUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: UserVouchersUpdateManyWithWhereWithoutVoucherInput | UserVouchersUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: UserVouchersScalarWhereInput | UserVouchersScalarWhereInput[]
  }

  export type UserVouchersUncheckedUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<UserVouchersCreateWithoutVoucherInput, UserVouchersUncheckedCreateWithoutVoucherInput> | UserVouchersCreateWithoutVoucherInput[] | UserVouchersUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: UserVouchersCreateOrConnectWithoutVoucherInput | UserVouchersCreateOrConnectWithoutVoucherInput[]
    upsert?: UserVouchersUpsertWithWhereUniqueWithoutVoucherInput | UserVouchersUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: UserVouchersCreateManyVoucherInputEnvelope
    set?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
    disconnect?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
    delete?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
    connect?: UserVouchersWhereUniqueInput | UserVouchersWhereUniqueInput[]
    update?: UserVouchersUpdateWithWhereUniqueWithoutVoucherInput | UserVouchersUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: UserVouchersUpdateManyWithWhereWithoutVoucherInput | UserVouchersUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: UserVouchersScalarWhereInput | UserVouchersScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutVouchersInput = {
    create?: XOR<UsersCreateWithoutVouchersInput, UsersUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVouchersInput
    connect?: UsersWhereUniqueInput
  }

  export type VouchersCreateNestedOneWithoutUser_vouchersInput = {
    create?: XOR<VouchersCreateWithoutUser_vouchersInput, VouchersUncheckedCreateWithoutUser_vouchersInput>
    connectOrCreate?: VouchersCreateOrConnectWithoutUser_vouchersInput
    connect?: VouchersWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsersUpdateOneRequiredWithoutVouchersNestedInput = {
    create?: XOR<UsersCreateWithoutVouchersInput, UsersUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVouchersInput
    upsert?: UsersUpsertWithoutVouchersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutVouchersInput, UsersUpdateWithoutVouchersInput>, UsersUncheckedUpdateWithoutVouchersInput>
  }

  export type VouchersUpdateOneRequiredWithoutUser_vouchersNestedInput = {
    create?: XOR<VouchersCreateWithoutUser_vouchersInput, VouchersUncheckedCreateWithoutUser_vouchersInput>
    connectOrCreate?: VouchersCreateOrConnectWithoutUser_vouchersInput
    upsert?: VouchersUpsertWithoutUser_vouchersInput
    connect?: VouchersWhereUniqueInput
    update?: XOR<XOR<VouchersUpdateToOneWithWhereWithoutUser_vouchersInput, VouchersUpdateWithoutUser_vouchersInput>, VouchersUncheckedUpdateWithoutUser_vouchersInput>
  }

  export type UsersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    connect?: UsersWhereUniqueInput
  }

  export type OrderItemsCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput> | OrderItemsCreateWithoutOrderInput[] | OrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrderInput | OrderItemsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemsCreateManyOrderInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type OrderItemsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput> | OrderItemsCreateWithoutOrderInput[] | OrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrderInput | OrderItemsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemsCreateManyOrderInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    upsert?: UsersUpsertWithoutOrdersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOrdersInput, UsersUpdateWithoutOrdersInput>, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput> | OrderItemsCreateWithoutOrderInput[] | OrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrderInput | OrderItemsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutOrderInput | OrderItemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemsCreateManyOrderInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutOrderInput | OrderItemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutOrderInput | OrderItemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type OrderItemsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput> | OrderItemsCreateWithoutOrderInput[] | OrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrderInput | OrderItemsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutOrderInput | OrderItemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemsCreateManyOrderInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutOrderInput | OrderItemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutOrderInput | OrderItemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type OrdersCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<OrdersCreateWithoutOrder_itemsInput, OrdersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_itemsInput
    connect?: OrdersWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<ProductsCreateWithoutOrder_itemsInput, ProductsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutOrder_itemsInput
    connect?: ProductsWhereUniqueInput
  }

  export type OrdersUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<OrdersCreateWithoutOrder_itemsInput, OrdersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_itemsInput
    upsert?: OrdersUpsertWithoutOrder_itemsInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutOrder_itemsInput, OrdersUpdateWithoutOrder_itemsInput>, OrdersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type ProductsUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<ProductsCreateWithoutOrder_itemsInput, ProductsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutOrder_itemsInput
    upsert?: ProductsUpsertWithoutOrder_itemsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutOrder_itemsInput, ProductsUpdateWithoutOrder_itemsInput>, ProductsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumHousingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HousingType | EnumHousingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HousingType[] | ListEnumHousingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HousingType[] | ListEnumHousingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHousingTypeFilter<$PrismaModel> | $Enums.HousingType
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumHousingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HousingType | EnumHousingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HousingType[] | ListEnumHousingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HousingType[] | ListEnumHousingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHousingTypeWithAggregatesFilter<$PrismaModel> | $Enums.HousingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHousingTypeFilter<$PrismaModel>
    _max?: NestedEnumHousingTypeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProductsCreateWithoutCategoryInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    size?: string | null
    color?: string | null
    description?: string | null
    discount_percentage?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventories?: StoreInventoryCreateNestedManyWithoutProductInput
    order_items?: OrderItemsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    size?: string | null
    color?: string | null
    description?: string | null
    discount_percentage?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventories?: StoreInventoryUncheckedCreateNestedManyWithoutProductInput
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsCreateManyCategoryInputEnvelope = {
    data: ProductsCreateManyCategoryInput | ProductsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductsUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    id?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    price?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    size?: StringNullableFilter<"Products"> | string | null
    color?: StringNullableFilter<"Products"> | string | null
    description?: StringNullableFilter<"Products"> | string | null
    category_id?: IntFilter<"Products"> | number
    discount_percentage?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Products"> | Date | string
    updatedAt?: DateTimeFilter<"Products"> | Date | string
  }

  export type CategoriesCreateWithoutProductsInput = {
    category_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesUncheckedCreateWithoutProductsInput = {
    id?: number
    category_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesCreateOrConnectWithoutProductsInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
  }

  export type StoreInventoryCreateWithoutProductInput = {
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoresCreateNestedOneWithoutInventoriesInput
  }

  export type StoreInventoryUncheckedCreateWithoutProductInput = {
    id?: number
    store_id: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreInventoryCreateOrConnectWithoutProductInput = {
    where: StoreInventoryWhereUniqueInput
    create: XOR<StoreInventoryCreateWithoutProductInput, StoreInventoryUncheckedCreateWithoutProductInput>
  }

  export type StoreInventoryCreateManyProductInputEnvelope = {
    data: StoreInventoryCreateManyProductInput | StoreInventoryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemsCreateWithoutProductInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrdersCreateNestedOneWithoutOrder_itemsInput
  }

  export type OrderItemsUncheckedCreateWithoutProductInput = {
    id?: number
    order_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemsCreateOrConnectWithoutProductInput = {
    where: OrderItemsWhereUniqueInput
    create: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput>
  }

  export type OrderItemsCreateManyProductInputEnvelope = {
    data: OrderItemsCreateManyProductInput | OrderItemsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithoutProductsInput = {
    update: XOR<CategoriesUpdateWithoutProductsInput, CategoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutProductsInput, CategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type CategoriesUpdateWithoutProductsInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreInventoryUpsertWithWhereUniqueWithoutProductInput = {
    where: StoreInventoryWhereUniqueInput
    update: XOR<StoreInventoryUpdateWithoutProductInput, StoreInventoryUncheckedUpdateWithoutProductInput>
    create: XOR<StoreInventoryCreateWithoutProductInput, StoreInventoryUncheckedCreateWithoutProductInput>
  }

  export type StoreInventoryUpdateWithWhereUniqueWithoutProductInput = {
    where: StoreInventoryWhereUniqueInput
    data: XOR<StoreInventoryUpdateWithoutProductInput, StoreInventoryUncheckedUpdateWithoutProductInput>
  }

  export type StoreInventoryUpdateManyWithWhereWithoutProductInput = {
    where: StoreInventoryScalarWhereInput
    data: XOR<StoreInventoryUpdateManyMutationInput, StoreInventoryUncheckedUpdateManyWithoutProductInput>
  }

  export type StoreInventoryScalarWhereInput = {
    AND?: StoreInventoryScalarWhereInput | StoreInventoryScalarWhereInput[]
    OR?: StoreInventoryScalarWhereInput[]
    NOT?: StoreInventoryScalarWhereInput | StoreInventoryScalarWhereInput[]
    id?: IntFilter<"StoreInventory"> | number
    store_id?: IntFilter<"StoreInventory"> | number
    product_id?: IntFilter<"StoreInventory"> | number
    quantity?: IntFilter<"StoreInventory"> | number
    createdAt?: DateTimeFilter<"StoreInventory"> | Date | string
    updatedAt?: DateTimeFilter<"StoreInventory"> | Date | string
  }

  export type OrderItemsUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemsWhereUniqueInput
    update: XOR<OrderItemsUpdateWithoutProductInput, OrderItemsUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput>
  }

  export type OrderItemsUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemsWhereUniqueInput
    data: XOR<OrderItemsUpdateWithoutProductInput, OrderItemsUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemsUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemsScalarWhereInput
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemsScalarWhereInput = {
    AND?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
    OR?: OrderItemsScalarWhereInput[]
    NOT?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
    id?: IntFilter<"OrderItems"> | number
    order_id?: IntFilter<"OrderItems"> | number
    product_id?: IntFilter<"OrderItems"> | number
    quantity?: IntFilter<"OrderItems"> | number
    unit_price?: DecimalFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItems"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItems"> | Date | string
  }

  export type StoreInventoryCreateWithoutStoreInput = {
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductsCreateNestedOneWithoutInventoriesInput
  }

  export type StoreInventoryUncheckedCreateWithoutStoreInput = {
    id?: number
    product_id: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreInventoryCreateOrConnectWithoutStoreInput = {
    where: StoreInventoryWhereUniqueInput
    create: XOR<StoreInventoryCreateWithoutStoreInput, StoreInventoryUncheckedCreateWithoutStoreInput>
  }

  export type StoreInventoryCreateManyStoreInputEnvelope = {
    data: StoreInventoryCreateManyStoreInput | StoreInventoryCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type StoreInventoryUpsertWithWhereUniqueWithoutStoreInput = {
    where: StoreInventoryWhereUniqueInput
    update: XOR<StoreInventoryUpdateWithoutStoreInput, StoreInventoryUncheckedUpdateWithoutStoreInput>
    create: XOR<StoreInventoryCreateWithoutStoreInput, StoreInventoryUncheckedCreateWithoutStoreInput>
  }

  export type StoreInventoryUpdateWithWhereUniqueWithoutStoreInput = {
    where: StoreInventoryWhereUniqueInput
    data: XOR<StoreInventoryUpdateWithoutStoreInput, StoreInventoryUncheckedUpdateWithoutStoreInput>
  }

  export type StoreInventoryUpdateManyWithWhereWithoutStoreInput = {
    where: StoreInventoryScalarWhereInput
    data: XOR<StoreInventoryUpdateManyMutationInput, StoreInventoryUncheckedUpdateManyWithoutStoreInput>
  }

  export type StoresCreateWithoutInventoriesInput = {
    store_name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoresUncheckedCreateWithoutInventoriesInput = {
    id?: number
    store_name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoresCreateOrConnectWithoutInventoriesInput = {
    where: StoresWhereUniqueInput
    create: XOR<StoresCreateWithoutInventoriesInput, StoresUncheckedCreateWithoutInventoriesInput>
  }

  export type ProductsCreateWithoutInventoriesInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    size?: string | null
    color?: string | null
    description?: string | null
    discount_percentage?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoriesCreateNestedOneWithoutProductsInput
    order_items?: OrderItemsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutInventoriesInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    size?: string | null
    color?: string | null
    description?: string | null
    category_id: number
    discount_percentage?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutInventoriesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutInventoriesInput, ProductsUncheckedCreateWithoutInventoriesInput>
  }

  export type StoresUpsertWithoutInventoriesInput = {
    update: XOR<StoresUpdateWithoutInventoriesInput, StoresUncheckedUpdateWithoutInventoriesInput>
    create: XOR<StoresCreateWithoutInventoriesInput, StoresUncheckedCreateWithoutInventoriesInput>
    where?: StoresWhereInput
  }

  export type StoresUpdateToOneWithWhereWithoutInventoriesInput = {
    where?: StoresWhereInput
    data: XOR<StoresUpdateWithoutInventoriesInput, StoresUncheckedUpdateWithoutInventoriesInput>
  }

  export type StoresUpdateWithoutInventoriesInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoresUncheckedUpdateWithoutInventoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUpsertWithoutInventoriesInput = {
    update: XOR<ProductsUpdateWithoutInventoriesInput, ProductsUncheckedUpdateWithoutInventoriesInput>
    create: XOR<ProductsCreateWithoutInventoriesInput, ProductsUncheckedCreateWithoutInventoriesInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutInventoriesInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutInventoriesInput, ProductsUncheckedUpdateWithoutInventoriesInput>
  }

  export type ProductsUpdateWithoutInventoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discount_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    order_items?: OrderItemsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutInventoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    discount_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserVouchersCreateWithoutUserInput = {
    is_used?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    voucher: VouchersCreateNestedOneWithoutUser_vouchersInput
  }

  export type UserVouchersUncheckedCreateWithoutUserInput = {
    id?: number
    voucher_id: number
    is_used?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVouchersCreateOrConnectWithoutUserInput = {
    where: UserVouchersWhereUniqueInput
    create: XOR<UserVouchersCreateWithoutUserInput, UserVouchersUncheckedCreateWithoutUserInput>
  }

  export type UserVouchersCreateManyUserInputEnvelope = {
    data: UserVouchersCreateManyUserInput | UserVouchersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutUserInput = {
    order_date?: Date | string
    total_price?: Decimal | DecimalJsLike | number | string | null
    status: string
    gender: string
    shipping_method: string
    payment_method: string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    housing_type: string
    address: string
    email: string
    phone: string
    recipient_name: string
    is_not_self_recipient?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    order_items?: OrderItemsCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutUserInput = {
    id?: number
    order_date?: Date | string
    total_price?: Decimal | DecimalJsLike | number | string | null
    status: string
    gender: string
    shipping_method: string
    payment_method: string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    housing_type: string
    address: string
    email: string
    phone: string
    recipient_name: string
    is_not_self_recipient?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutUserInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersCreateManyUserInputEnvelope = {
    data: OrdersCreateManyUserInput | OrdersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserVouchersUpsertWithWhereUniqueWithoutUserInput = {
    where: UserVouchersWhereUniqueInput
    update: XOR<UserVouchersUpdateWithoutUserInput, UserVouchersUncheckedUpdateWithoutUserInput>
    create: XOR<UserVouchersCreateWithoutUserInput, UserVouchersUncheckedCreateWithoutUserInput>
  }

  export type UserVouchersUpdateWithWhereUniqueWithoutUserInput = {
    where: UserVouchersWhereUniqueInput
    data: XOR<UserVouchersUpdateWithoutUserInput, UserVouchersUncheckedUpdateWithoutUserInput>
  }

  export type UserVouchersUpdateManyWithWhereWithoutUserInput = {
    where: UserVouchersScalarWhereInput
    data: XOR<UserVouchersUpdateManyMutationInput, UserVouchersUncheckedUpdateManyWithoutUserInput>
  }

  export type UserVouchersScalarWhereInput = {
    AND?: UserVouchersScalarWhereInput | UserVouchersScalarWhereInput[]
    OR?: UserVouchersScalarWhereInput[]
    NOT?: UserVouchersScalarWhereInput | UserVouchersScalarWhereInput[]
    id?: IntFilter<"UserVouchers"> | number
    user_id?: IntFilter<"UserVouchers"> | number
    voucher_id?: IntFilter<"UserVouchers"> | number
    is_used?: BoolFilter<"UserVouchers"> | boolean
    createdAt?: DateTimeFilter<"UserVouchers"> | Date | string
    updatedAt?: DateTimeFilter<"UserVouchers"> | Date | string
  }

  export type OrdersUpsertWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUserInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUserInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: IntFilter<"Orders"> | number
    user_id?: IntFilter<"Orders"> | number
    order_date?: DateTimeFilter<"Orders"> | Date | string
    total_price?: DecimalNullableFilter<"Orders"> | Decimal | DecimalJsLike | number | string | null
    status?: StringFilter<"Orders"> | string
    gender?: StringFilter<"Orders"> | string
    shipping_method?: StringFilter<"Orders"> | string
    payment_method?: StringFilter<"Orders"> | string
    shipping_fee?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    housing_type?: StringFilter<"Orders"> | string
    address?: StringFilter<"Orders"> | string
    email?: StringFilter<"Orders"> | string
    phone?: StringFilter<"Orders"> | string
    recipient_name?: StringFilter<"Orders"> | string
    is_not_self_recipient?: BoolFilter<"Orders"> | boolean
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
  }

  export type UserVouchersCreateWithoutVoucherInput = {
    is_used?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutVouchersInput
  }

  export type UserVouchersUncheckedCreateWithoutVoucherInput = {
    id?: number
    user_id: number
    is_used?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVouchersCreateOrConnectWithoutVoucherInput = {
    where: UserVouchersWhereUniqueInput
    create: XOR<UserVouchersCreateWithoutVoucherInput, UserVouchersUncheckedCreateWithoutVoucherInput>
  }

  export type UserVouchersCreateManyVoucherInputEnvelope = {
    data: UserVouchersCreateManyVoucherInput | UserVouchersCreateManyVoucherInput[]
    skipDuplicates?: boolean
  }

  export type UserVouchersUpsertWithWhereUniqueWithoutVoucherInput = {
    where: UserVouchersWhereUniqueInput
    update: XOR<UserVouchersUpdateWithoutVoucherInput, UserVouchersUncheckedUpdateWithoutVoucherInput>
    create: XOR<UserVouchersCreateWithoutVoucherInput, UserVouchersUncheckedCreateWithoutVoucherInput>
  }

  export type UserVouchersUpdateWithWhereUniqueWithoutVoucherInput = {
    where: UserVouchersWhereUniqueInput
    data: XOR<UserVouchersUpdateWithoutVoucherInput, UserVouchersUncheckedUpdateWithoutVoucherInput>
  }

  export type UserVouchersUpdateManyWithWhereWithoutVoucherInput = {
    where: UserVouchersScalarWhereInput
    data: XOR<UserVouchersUpdateManyMutationInput, UserVouchersUncheckedUpdateManyWithoutVoucherInput>
  }

  export type UsersCreateWithoutVouchersInput = {
    name: string
    email: string
    phone: string
    province: string
    district: string
    commune: string
    address: string
    housing_type: $Enums.HousingType
    password: string
    refreshToken?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrdersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutVouchersInput = {
    id?: number
    name: string
    email: string
    phone: string
    province: string
    district: string
    commune: string
    address: string
    housing_type: $Enums.HousingType
    password: string
    refreshToken?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutVouchersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutVouchersInput, UsersUncheckedCreateWithoutVouchersInput>
  }

  export type VouchersCreateWithoutUser_vouchersInput = {
    code: string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    expiry_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VouchersUncheckedCreateWithoutUser_vouchersInput = {
    id?: number
    code: string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    expiry_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VouchersCreateOrConnectWithoutUser_vouchersInput = {
    where: VouchersWhereUniqueInput
    create: XOR<VouchersCreateWithoutUser_vouchersInput, VouchersUncheckedCreateWithoutUser_vouchersInput>
  }

  export type UsersUpsertWithoutVouchersInput = {
    update: XOR<UsersUpdateWithoutVouchersInput, UsersUncheckedUpdateWithoutVouchersInput>
    create: XOR<UsersCreateWithoutVouchersInput, UsersUncheckedCreateWithoutVouchersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutVouchersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutVouchersInput, UsersUncheckedUpdateWithoutVouchersInput>
  }

  export type UsersUpdateWithoutVouchersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    housing_type?: EnumHousingTypeFieldUpdateOperationsInput | $Enums.HousingType
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutVouchersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    housing_type?: EnumHousingTypeFieldUpdateOperationsInput | $Enums.HousingType
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VouchersUpsertWithoutUser_vouchersInput = {
    update: XOR<VouchersUpdateWithoutUser_vouchersInput, VouchersUncheckedUpdateWithoutUser_vouchersInput>
    create: XOR<VouchersCreateWithoutUser_vouchersInput, VouchersUncheckedCreateWithoutUser_vouchersInput>
    where?: VouchersWhereInput
  }

  export type VouchersUpdateToOneWithWhereWithoutUser_vouchersInput = {
    where?: VouchersWhereInput
    data: XOR<VouchersUpdateWithoutUser_vouchersInput, VouchersUncheckedUpdateWithoutUser_vouchersInput>
  }

  export type VouchersUpdateWithoutUser_vouchersInput = {
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VouchersUncheckedUpdateWithoutUser_vouchersInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateWithoutOrdersInput = {
    name: string
    email: string
    phone: string
    province: string
    district: string
    commune: string
    address: string
    housing_type: $Enums.HousingType
    password: string
    refreshToken?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    vouchers?: UserVouchersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    email: string
    phone: string
    province: string
    district: string
    commune: string
    address: string
    housing_type: $Enums.HousingType
    password: string
    refreshToken?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    vouchers?: UserVouchersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutOrdersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemsCreateWithoutOrderInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductsCreateNestedOneWithoutOrder_itemsInput
  }

  export type OrderItemsUncheckedCreateWithoutOrderInput = {
    id?: number
    product_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemsCreateOrConnectWithoutOrderInput = {
    where: OrderItemsWhereUniqueInput
    create: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemsCreateManyOrderInputEnvelope = {
    data: OrderItemsCreateManyOrderInput | OrderItemsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutOrdersInput = {
    update: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    housing_type?: EnumHousingTypeFieldUpdateOperationsInput | $Enums.HousingType
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vouchers?: UserVouchersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    housing_type?: EnumHousingTypeFieldUpdateOperationsInput | $Enums.HousingType
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vouchers?: UserVouchersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderItemsUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemsWhereUniqueInput
    update: XOR<OrderItemsUpdateWithoutOrderInput, OrderItemsUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemsUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemsWhereUniqueInput
    data: XOR<OrderItemsUpdateWithoutOrderInput, OrderItemsUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemsUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemsScalarWhereInput
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrdersCreateWithoutOrder_itemsInput = {
    order_date?: Date | string
    total_price?: Decimal | DecimalJsLike | number | string | null
    status: string
    gender: string
    shipping_method: string
    payment_method: string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    housing_type: string
    address: string
    email: string
    phone: string
    recipient_name: string
    is_not_self_recipient?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    user_id: number
    order_date?: Date | string
    total_price?: Decimal | DecimalJsLike | number | string | null
    status: string
    gender: string
    shipping_method: string
    payment_method: string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    housing_type: string
    address: string
    email: string
    phone: string
    recipient_name: string
    is_not_self_recipient?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersCreateOrConnectWithoutOrder_itemsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrder_itemsInput, OrdersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type ProductsCreateWithoutOrder_itemsInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    size?: string | null
    color?: string | null
    description?: string | null
    discount_percentage?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoriesCreateNestedOneWithoutProductsInput
    inventories?: StoreInventoryCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    size?: string | null
    color?: string | null
    description?: string | null
    category_id: number
    discount_percentage?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventories?: StoreInventoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutOrder_itemsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutOrder_itemsInput, ProductsUncheckedCreateWithoutOrder_itemsInput>
  }

  export type OrdersUpsertWithoutOrder_itemsInput = {
    update: XOR<OrdersUpdateWithoutOrder_itemsInput, OrdersUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<OrdersCreateWithoutOrder_itemsInput, OrdersUncheckedCreateWithoutOrder_itemsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutOrder_itemsInput, OrdersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type OrdersUpdateWithoutOrder_itemsInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    shipping_method?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    housing_type?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    is_not_self_recipient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    shipping_method?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    housing_type?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    is_not_self_recipient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUpsertWithoutOrder_itemsInput = {
    update: XOR<ProductsUpdateWithoutOrder_itemsInput, ProductsUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<ProductsCreateWithoutOrder_itemsInput, ProductsUncheckedCreateWithoutOrder_itemsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutOrder_itemsInput, ProductsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type ProductsUpdateWithoutOrder_itemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discount_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    inventories?: StoreInventoryUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    discount_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: StoreInventoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateManyCategoryInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    size?: string | null
    color?: string | null
    description?: string | null
    discount_percentage?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discount_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: StoreInventoryUpdateManyWithoutProductNestedInput
    order_items?: OrderItemsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discount_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: StoreInventoryUncheckedUpdateManyWithoutProductNestedInput
    order_items?: OrderItemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discount_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreInventoryCreateManyProductInput = {
    id?: number
    store_id: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemsCreateManyProductInput = {
    id?: number
    order_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreInventoryUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoresUpdateOneRequiredWithoutInventoriesNestedInput
  }

  export type StoreInventoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreInventoryUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type OrderItemsUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreInventoryCreateManyStoreInput = {
    id?: number
    product_id: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreInventoryUpdateWithoutStoreInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutInventoriesNestedInput
  }

  export type StoreInventoryUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreInventoryUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVouchersCreateManyUserInput = {
    id?: number
    voucher_id: number
    is_used?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersCreateManyUserInput = {
    id?: number
    order_date?: Date | string
    total_price?: Decimal | DecimalJsLike | number | string | null
    status: string
    gender: string
    shipping_method: string
    payment_method: string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    housing_type: string
    address: string
    email: string
    phone: string
    recipient_name: string
    is_not_self_recipient?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVouchersUpdateWithoutUserInput = {
    is_used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher?: VouchersUpdateOneRequiredWithoutUser_vouchersNestedInput
  }

  export type UserVouchersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    voucher_id?: IntFieldUpdateOperationsInput | number
    is_used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVouchersUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    voucher_id?: IntFieldUpdateOperationsInput | number
    is_used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUpdateWithoutUserInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    shipping_method?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    housing_type?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    is_not_self_recipient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemsUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    shipping_method?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    housing_type?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    is_not_self_recipient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    shipping_method?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    housing_type?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    is_not_self_recipient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVouchersCreateManyVoucherInput = {
    id?: number
    user_id: number
    is_used?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVouchersUpdateWithoutVoucherInput = {
    is_used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutVouchersNestedInput
  }

  export type UserVouchersUncheckedUpdateWithoutVoucherInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    is_used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVouchersUncheckedUpdateManyWithoutVoucherInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    is_used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsCreateManyOrderInput = {
    id?: number
    product_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemsUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type OrderItemsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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