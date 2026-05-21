/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query GetNewTokens {\n  refreshToken {\n    user {\n      email\n      role\n    }\n  }\n}": typeof types.GetNewTokensDocument,
    "mutation Login($data: AuthInput!) {\n  login(data: $data) {\n    user {\n      id\n      email\n      role\n      isEmailVerified\n    }\n  }\n}": typeof types.LoginDocument,
    "mutation Logout {\n  logout\n}": typeof types.LogoutDocument,
    "query Me {\n  me {\n    id\n    email\n    role\n    isEmailVerified\n    profile {\n      fullName\n      gender\n      age\n      bio\n      contact\n      photo\n    }\n    bodyMeasurement {\n      height\n      weight\n      chest\n      waist\n      thigh\n      arm\n      goalWeight\n      activityLevel\n      nutritionGoal\n    }\n  }\n}": typeof types.MeDocument,
    "mutation Register($data: AuthInput!) {\n  register(data: $data) {\n    user {\n      id\n      email\n      role\n      isEmailVerified\n    }\n  }\n}": typeof types.RegisterDocument,
    "mutation RequestPasswordReset($data: RequestPasswordResetInput!) {\n  requestPasswordReset(data: $data)\n}": typeof types.RequestPasswordResetDocument,
    "mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}": typeof types.ResetPasswordDocument,
    "mutation VerifyEmail($token: String!) {\n  verifyEmail(token: $token)\n}": typeof types.VerifyEmailDocument,
    "query GetProfile {\n  me {\n    id\n    email\n    role\n    isEmailVerified\n    profile {\n      fullName\n      gender\n      age\n      bio\n      contact\n      photo\n    }\n    bodyMeasurement {\n      height\n      weight\n      chest\n      waist\n      thigh\n      arm\n      goalWeight\n      activityLevel\n      nutritionGoal\n    }\n  }\n}": typeof types.GetProfileDocument,
    "mutation UpdateProfile($data: UpdateUserInput!) {\n  updateProfile(data: $data) {\n    id\n    email\n    role\n    isEmailVerified\n    profile {\n      fullName\n      gender\n      age\n      bio\n      contact\n      photo\n    }\n    bodyMeasurement {\n      height\n      weight\n      chest\n      waist\n      thigh\n      arm\n      goalWeight\n      activityLevel\n      nutritionGoal\n    }\n  }\n}": typeof types.UpdateProfileDocument,
    "query GetRecipeBySlug($slug: String!) {\n  recipeBySlug(slug: $slug) {\n    id\n    title\n    description\n    image\n    slug\n    cuisineType\n    difficulty\n    prepTime\n    cookTime\n    calories\n    protein\n    fats\n    carbohydrates\n    fiber\n    rating\n    authorId\n    dishTypeId\n    yield\n    sourceUrl\n    authorName\n    likes\n    hasLike\n    views\n    author {\n      profile {\n        photo\n        fullName\n      }\n    }\n    tags {\n      name\n    }\n    ingredients {\n      quantity\n      unit\n      ingredient {\n        id\n        name\n        image\n        price\n      }\n    }\n    steps {\n      id\n      title\n      description\n      imgUrl\n    }\n    comments {\n      id\n      content\n      createdAt\n      author {\n        profile {\n          photo\n          fullName\n        }\n      }\n    }\n  }\n}": typeof types.GetRecipeBySlugDocument,
    "mutation ToggleRecipeLike($recipeId: String!) {\n  toggleRecipeLike(recipeId: $recipeId)\n}": typeof types.ToggleRecipeLikeDocument,
    "query GetDishTypes {\n  dishTypes {\n    id\n    order\n    title\n  }\n}": typeof types.GetDishTypesDocument,
    "query GetRecipes($input: RecipeFilterInput!) {\n  recipes(input: $input) {\n    hasMore\n    total\n    items {\n      title\n      description\n      image\n      slug\n      cuisineType\n      difficulty\n      prepTime\n      cookTime\n      calories\n      rating\n      likes\n      views\n      hasLike\n    }\n  }\n}": typeof types.GetRecipesDocument,
};
const documents: Documents = {
    "query GetNewTokens {\n  refreshToken {\n    user {\n      email\n      role\n    }\n  }\n}": types.GetNewTokensDocument,
    "mutation Login($data: AuthInput!) {\n  login(data: $data) {\n    user {\n      id\n      email\n      role\n      isEmailVerified\n    }\n  }\n}": types.LoginDocument,
    "mutation Logout {\n  logout\n}": types.LogoutDocument,
    "query Me {\n  me {\n    id\n    email\n    role\n    isEmailVerified\n    profile {\n      fullName\n      gender\n      age\n      bio\n      contact\n      photo\n    }\n    bodyMeasurement {\n      height\n      weight\n      chest\n      waist\n      thigh\n      arm\n      goalWeight\n      activityLevel\n      nutritionGoal\n    }\n  }\n}": types.MeDocument,
    "mutation Register($data: AuthInput!) {\n  register(data: $data) {\n    user {\n      id\n      email\n      role\n      isEmailVerified\n    }\n  }\n}": types.RegisterDocument,
    "mutation RequestPasswordReset($data: RequestPasswordResetInput!) {\n  requestPasswordReset(data: $data)\n}": types.RequestPasswordResetDocument,
    "mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}": types.ResetPasswordDocument,
    "mutation VerifyEmail($token: String!) {\n  verifyEmail(token: $token)\n}": types.VerifyEmailDocument,
    "query GetProfile {\n  me {\n    id\n    email\n    role\n    isEmailVerified\n    profile {\n      fullName\n      gender\n      age\n      bio\n      contact\n      photo\n    }\n    bodyMeasurement {\n      height\n      weight\n      chest\n      waist\n      thigh\n      arm\n      goalWeight\n      activityLevel\n      nutritionGoal\n    }\n  }\n}": types.GetProfileDocument,
    "mutation UpdateProfile($data: UpdateUserInput!) {\n  updateProfile(data: $data) {\n    id\n    email\n    role\n    isEmailVerified\n    profile {\n      fullName\n      gender\n      age\n      bio\n      contact\n      photo\n    }\n    bodyMeasurement {\n      height\n      weight\n      chest\n      waist\n      thigh\n      arm\n      goalWeight\n      activityLevel\n      nutritionGoal\n    }\n  }\n}": types.UpdateProfileDocument,
    "query GetRecipeBySlug($slug: String!) {\n  recipeBySlug(slug: $slug) {\n    id\n    title\n    description\n    image\n    slug\n    cuisineType\n    difficulty\n    prepTime\n    cookTime\n    calories\n    protein\n    fats\n    carbohydrates\n    fiber\n    rating\n    authorId\n    dishTypeId\n    yield\n    sourceUrl\n    authorName\n    likes\n    hasLike\n    views\n    author {\n      profile {\n        photo\n        fullName\n      }\n    }\n    tags {\n      name\n    }\n    ingredients {\n      quantity\n      unit\n      ingredient {\n        id\n        name\n        image\n        price\n      }\n    }\n    steps {\n      id\n      title\n      description\n      imgUrl\n    }\n    comments {\n      id\n      content\n      createdAt\n      author {\n        profile {\n          photo\n          fullName\n        }\n      }\n    }\n  }\n}": types.GetRecipeBySlugDocument,
    "mutation ToggleRecipeLike($recipeId: String!) {\n  toggleRecipeLike(recipeId: $recipeId)\n}": types.ToggleRecipeLikeDocument,
    "query GetDishTypes {\n  dishTypes {\n    id\n    order\n    title\n  }\n}": types.GetDishTypesDocument,
    "query GetRecipes($input: RecipeFilterInput!) {\n  recipes(input: $input) {\n    hasMore\n    total\n    items {\n      title\n      description\n      image\n      slug\n      cuisineType\n      difficulty\n      prepTime\n      cookTime\n      calories\n      rating\n      likes\n      views\n      hasLike\n    }\n  }\n}": types.GetRecipesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetNewTokens {\n  refreshToken {\n    user {\n      email\n      role\n    }\n  }\n}"): (typeof documents)["query GetNewTokens {\n  refreshToken {\n    user {\n      email\n      role\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($data: AuthInput!) {\n  login(data: $data) {\n    user {\n      id\n      email\n      role\n      isEmailVerified\n    }\n  }\n}"): (typeof documents)["mutation Login($data: AuthInput!) {\n  login(data: $data) {\n    user {\n      id\n      email\n      role\n      isEmailVerified\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Logout {\n  logout\n}"): (typeof documents)["mutation Logout {\n  logout\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Me {\n  me {\n    id\n    email\n    role\n    isEmailVerified\n    profile {\n      fullName\n      gender\n      age\n      bio\n      contact\n      photo\n    }\n    bodyMeasurement {\n      height\n      weight\n      chest\n      waist\n      thigh\n      arm\n      goalWeight\n      activityLevel\n      nutritionGoal\n    }\n  }\n}"): (typeof documents)["query Me {\n  me {\n    id\n    email\n    role\n    isEmailVerified\n    profile {\n      fullName\n      gender\n      age\n      bio\n      contact\n      photo\n    }\n    bodyMeasurement {\n      height\n      weight\n      chest\n      waist\n      thigh\n      arm\n      goalWeight\n      activityLevel\n      nutritionGoal\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($data: AuthInput!) {\n  register(data: $data) {\n    user {\n      id\n      email\n      role\n      isEmailVerified\n    }\n  }\n}"): (typeof documents)["mutation Register($data: AuthInput!) {\n  register(data: $data) {\n    user {\n      id\n      email\n      role\n      isEmailVerified\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RequestPasswordReset($data: RequestPasswordResetInput!) {\n  requestPasswordReset(data: $data)\n}"): (typeof documents)["mutation RequestPasswordReset($data: RequestPasswordResetInput!) {\n  requestPasswordReset(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}"): (typeof documents)["mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation VerifyEmail($token: String!) {\n  verifyEmail(token: $token)\n}"): (typeof documents)["mutation VerifyEmail($token: String!) {\n  verifyEmail(token: $token)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProfile {\n  me {\n    id\n    email\n    role\n    isEmailVerified\n    profile {\n      fullName\n      gender\n      age\n      bio\n      contact\n      photo\n    }\n    bodyMeasurement {\n      height\n      weight\n      chest\n      waist\n      thigh\n      arm\n      goalWeight\n      activityLevel\n      nutritionGoal\n    }\n  }\n}"): (typeof documents)["query GetProfile {\n  me {\n    id\n    email\n    role\n    isEmailVerified\n    profile {\n      fullName\n      gender\n      age\n      bio\n      contact\n      photo\n    }\n    bodyMeasurement {\n      height\n      weight\n      chest\n      waist\n      thigh\n      arm\n      goalWeight\n      activityLevel\n      nutritionGoal\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateProfile($data: UpdateUserInput!) {\n  updateProfile(data: $data) {\n    id\n    email\n    role\n    isEmailVerified\n    profile {\n      fullName\n      gender\n      age\n      bio\n      contact\n      photo\n    }\n    bodyMeasurement {\n      height\n      weight\n      chest\n      waist\n      thigh\n      arm\n      goalWeight\n      activityLevel\n      nutritionGoal\n    }\n  }\n}"): (typeof documents)["mutation UpdateProfile($data: UpdateUserInput!) {\n  updateProfile(data: $data) {\n    id\n    email\n    role\n    isEmailVerified\n    profile {\n      fullName\n      gender\n      age\n      bio\n      contact\n      photo\n    }\n    bodyMeasurement {\n      height\n      weight\n      chest\n      waist\n      thigh\n      arm\n      goalWeight\n      activityLevel\n      nutritionGoal\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetRecipeBySlug($slug: String!) {\n  recipeBySlug(slug: $slug) {\n    id\n    title\n    description\n    image\n    slug\n    cuisineType\n    difficulty\n    prepTime\n    cookTime\n    calories\n    protein\n    fats\n    carbohydrates\n    fiber\n    rating\n    authorId\n    dishTypeId\n    yield\n    sourceUrl\n    authorName\n    likes\n    hasLike\n    views\n    author {\n      profile {\n        photo\n        fullName\n      }\n    }\n    tags {\n      name\n    }\n    ingredients {\n      quantity\n      unit\n      ingredient {\n        id\n        name\n        image\n        price\n      }\n    }\n    steps {\n      id\n      title\n      description\n      imgUrl\n    }\n    comments {\n      id\n      content\n      createdAt\n      author {\n        profile {\n          photo\n          fullName\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetRecipeBySlug($slug: String!) {\n  recipeBySlug(slug: $slug) {\n    id\n    title\n    description\n    image\n    slug\n    cuisineType\n    difficulty\n    prepTime\n    cookTime\n    calories\n    protein\n    fats\n    carbohydrates\n    fiber\n    rating\n    authorId\n    dishTypeId\n    yield\n    sourceUrl\n    authorName\n    likes\n    hasLike\n    views\n    author {\n      profile {\n        photo\n        fullName\n      }\n    }\n    tags {\n      name\n    }\n    ingredients {\n      quantity\n      unit\n      ingredient {\n        id\n        name\n        image\n        price\n      }\n    }\n    steps {\n      id\n      title\n      description\n      imgUrl\n    }\n    comments {\n      id\n      content\n      createdAt\n      author {\n        profile {\n          photo\n          fullName\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ToggleRecipeLike($recipeId: String!) {\n  toggleRecipeLike(recipeId: $recipeId)\n}"): (typeof documents)["mutation ToggleRecipeLike($recipeId: String!) {\n  toggleRecipeLike(recipeId: $recipeId)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetDishTypes {\n  dishTypes {\n    id\n    order\n    title\n  }\n}"): (typeof documents)["query GetDishTypes {\n  dishTypes {\n    id\n    order\n    title\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetRecipes($input: RecipeFilterInput!) {\n  recipes(input: $input) {\n    hasMore\n    total\n    items {\n      title\n      description\n      image\n      slug\n      cuisineType\n      difficulty\n      prepTime\n      cookTime\n      calories\n      rating\n      likes\n      views\n      hasLike\n    }\n  }\n}"): (typeof documents)["query GetRecipes($input: RecipeFilterInput!) {\n  recipes(input: $input) {\n    hasMore\n    total\n    items {\n      title\n      description\n      image\n      slug\n      cuisineType\n      difficulty\n      prepTime\n      cookTime\n      calories\n      rating\n      likes\n      views\n      hasLike\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;