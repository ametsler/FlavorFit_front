/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export const ActivityLevel = {
  Activity: 'ACTIVITY',
  Light: 'LIGHT',
  Moderate: 'MODERATE',
  Sedentary: 'SEDENTARY',
  VeryActivity: 'VERY_ACTIVITY'
} as const;

export type ActivityLevel = typeof ActivityLevel[keyof typeof ActivityLevel];
export type AuthInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  user: UserModel;
};

export type BodyMeasurementModel = {
  __typename?: 'BodyMeasurementModel';
  activityLevel?: Maybe<ActivityLevel>;
  arm?: Maybe<Scalars['Int']['output']>;
  chest?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  goalWeight?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  nutritionGoal?: Maybe<NutritionGoal>;
  profile?: Maybe<ProfileModel>;
  profileId?: Maybe<Scalars['String']['output']>;
  thigh?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
  waist?: Maybe<Scalars['Int']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

export type CommentLikeModel = {
  __typename?: 'CommentLikeModel';
  comment: CommentModel;
  commentId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
};

export type CommentModel = {
  __typename?: 'CommentModel';
  author: UserModel;
  authorId: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  likes?: Maybe<Array<CommentLikeModel>>;
  recipe: RecipeModel;
  recipeId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateCommentInput = {
  content: Scalars['String']['input'];
  recipeId: Scalars['String']['input'];
};

export type CreateDeliveryInput = {
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  status?: DeliveryStatus;
};

export type CreateDishInput = {
  order: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type CreateItemInput = {
  quantity?: Scalars['Int']['input'];
  recipeIngredientId: Scalars['String']['input'];
};

export type CreateOrderInput = {
  items: Array<CreateItemInput>;
};

export type CreateRecipeIngredientInput = {
  ingredientId: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
  recipeId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRecipeInput = {
  calories?: InputMaybe<Scalars['Int']['input']>;
  carbohydrates?: InputMaybe<Scalars['Int']['input']>;
  cookTime: Scalars['Int']['input'];
  cuisineType: Scalars['String']['input'];
  description: Scalars['String']['input'];
  difficulty: Difficulty;
  dishTypeId: Scalars['String']['input'];
  fats?: InputMaybe<Scalars['Int']['input']>;
  fiber?: InputMaybe<Scalars['Int']['input']>;
  prepTime: Scalars['Int']['input'];
  protein?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  recipeIngredients?: InputMaybe<Array<CreateRecipeIngredientInput>>;
  slug: Scalars['String']['input'];
  steps?: InputMaybe<Array<CreateStepInput>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
};

export type CreateStepInput = {
  description: Scalars['String']['input'];
  imgUrl?: InputMaybe<Scalars['String']['input']>;
  order: Scalars['Int']['input'];
  recipeId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateTagInput = {
  name: Scalars['String']['input'];
};

export type CreateViewInput = {
  recipeId: Scalars['String']['input'];
};

export type DeliveryModel = {
  __typename?: 'DeliveryModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  status: DeliveryStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export const DeliveryStatus = {
  Completed: 'COMPLETED',
  Delivery: 'DELIVERY',
  Preparing: 'PREPARING'
} as const;

export type DeliveryStatus = typeof DeliveryStatus[keyof typeof DeliveryStatus];
export const Difficulty = {
  Easy: 'EASY',
  Hard: 'HARD',
  Medium: 'MEDIUM'
} as const;

export type Difficulty = typeof Difficulty[keyof typeof Difficulty];
export type DishModel = {
  __typename?: 'DishModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  order: Scalars['Int']['output'];
  recipes?: Maybe<Array<RecipeModel>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export const Gender = {
  Female: 'FEMALE',
  Male: 'MALE'
} as const;

export type Gender = typeof Gender[keyof typeof Gender];
export type IngredientCreateInput = {
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  unit: Unit;
};

export type IngredientModel = {
  __typename?: 'IngredientModel';
  createdAt: Scalars['DateTime']['output'];
  iconUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  unit: Unit;
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: CommentModel;
  createDelivery: DeliveryModel;
  createDishType: DishModel;
  createIngredient: IngredientModel;
  createLike: RecipeViewModel;
  createOrder: OrderModel;
  createRecipe: RecipeModel;
  createStep: RecipeStepModel;
  createTag: RecipeTagModel;
  deleteIngredientById: Scalars['Boolean']['output'];
  deleteRecipeById: Scalars['Boolean']['output'];
  login: AuthResponse;
  logout: Scalars['Boolean']['output'];
  register: AuthResponse;
  removeComment: CommentModel;
  removeDish: DishModel;
  removeLike: RecipeViewModel;
  removeOrder: OrderModel;
  removeStep: RecipeStepModel;
  removeTag: RecipeTagModel;
  requestPasswordReset: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  toggleCommentLike: Scalars['Boolean']['output'];
  toggleRecipeLike: Scalars['Boolean']['output'];
  updateComment: CommentModel;
  updateDelivery: DeliveryModel;
  updateDish: DishModel;
  updateIngredient: IngredientModel;
  updateProfile: UserModel;
  updateRecipe: RecipeModel;
  updateStep: RecipeStepModel;
  updateTag: RecipeTagModel;
  verifyEmail: Scalars['Boolean']['output'];
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateDeliveryArgs = {
  createDeliveryInput: CreateDeliveryInput;
};


export type MutationCreateDishTypeArgs = {
  data: CreateDishInput;
};


export type MutationCreateIngredientArgs = {
  input: IngredientCreateInput;
};


export type MutationCreateLikeArgs = {
  input: CreateViewInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreateRecipeArgs = {
  input: CreateRecipeInput;
};


export type MutationCreateStepArgs = {
  input: CreateStepInput;
};


export type MutationCreateTagArgs = {
  createTagInput: CreateTagInput;
};


export type MutationDeleteIngredientByIdArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteRecipeByIdArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  data: AuthInput;
};


export type MutationRegisterArgs = {
  data: AuthInput;
};


export type MutationRemoveCommentArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveDishArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveLikeArgs = {
  input: CreateViewInput;
};


export type MutationRemoveOrderArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveStepArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveTagArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRequestPasswordResetArgs = {
  data: RequestPasswordResetInput;
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationToggleCommentLikeArgs = {
  commentId: Scalars['String']['input'];
};


export type MutationToggleRecipeLikeArgs = {
  recipeId: Scalars['String']['input'];
};


export type MutationUpdateCommentArgs = {
  id: Scalars['String']['input'];
  input: CreateCommentInput;
};


export type MutationUpdateDeliveryArgs = {
  id: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


export type MutationUpdateDishArgs = {
  data: CreateDishInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateIngredientArgs = {
  id: Scalars['String']['input'];
  input: IngredientCreateInput;
};


export type MutationUpdateProfileArgs = {
  data: UpdateUserInput;
};


export type MutationUpdateRecipeArgs = {
  id: Scalars['String']['input'];
  input: CreateRecipeInput;
};


export type MutationUpdateStepArgs = {
  id: Scalars['String']['input'];
  input: CreateStepInput;
};


export type MutationUpdateTagArgs = {
  id: Scalars['String']['input'];
  updateTagInput: CreateTagInput;
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String']['input'];
};

export const NutritionGoal = {
  Maintenance: 'MAINTENANCE',
  MuscleGain: 'MUSCLE_GAIN',
  WeightLoss: 'WEIGHT_LOSS'
} as const;

export type NutritionGoal = typeof NutritionGoal[keyof typeof NutritionGoal];
export type OrderItemModel = {
  __typename?: 'OrderItemModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  order: OrderModel;
  orderId: Scalars['String']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
  recipeIngredient: RecipeIngredientModel;
  recipeIngredientId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderModel = {
  __typename?: 'OrderModel';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  items?: Maybe<Array<OrderItemModel>>;
  number: Scalars['String']['output'];
  status: OrderStatus;
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
};

export const OrderStatus = {
  Cancelled: 'CANCELLED',
  Completed: 'COMPLETED',
  Pending: 'PENDING',
  Processing: 'PROCESSING'
} as const;

export type OrderStatus = typeof OrderStatus[keyof typeof OrderStatus];
export type ProfileModel = {
  __typename?: 'ProfileModel';
  age?: Maybe<Scalars['Int']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  bodyMeasurements?: Maybe<Array<BodyMeasurementModel>>;
  contact?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  fullName: Scalars['String']['output'];
  gender?: Maybe<Gender>;
  id: Scalars['ID']['output'];
  photo?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  dishTypes: Array<DishModel>;
  findAllComments: Array<CommentModel>;
  findCommentLikeCount: Scalars['Float']['output'];
  findRecipeLikeCount: Scalars['Float']['output'];
  ingredientById: IngredientModel;
  ingredients: Array<IngredientModel>;
  like: Array<RecipeViewModel>;
  me: UserModel;
  order: OrderModel;
  orders: Array<OrderModel>;
  recipeById: RecipeModel;
  recipeBySlug: RecipeModel;
  recipes: Array<RecipeModel>;
  recipesPageable: Array<RecipeModel>;
  refreshToken: AuthResponse;
  step: RecipeStepModel;
  tag: RecipeTagModel;
  users: Array<UserModel>;
};


export type QueryFindAllCommentsArgs = {
  recipeId: Scalars['String']['input'];
};


export type QueryFindCommentLikeCountArgs = {
  commentId: Scalars['String']['input'];
};


export type QueryFindRecipeLikeCountArgs = {
  recipeId: Scalars['String']['input'];
};


export type QueryIngredientByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryLikeArgs = {
  input: CreateViewInput;
};


export type QueryOrderArgs = {
  id: Scalars['String']['input'];
};


export type QueryRecipeByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryRecipeBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryRecipesPageableArgs = {
  filter?: InputMaybe<RecipeFilterInput>;
};


export type QueryStepArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTagArgs = {
  id: Scalars['Int']['input'];
};

export type RecipeFilterInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type RecipeIngredientModel = {
  __typename?: 'RecipeIngredientModel';
  OrderItem?: Maybe<Array<OrderItemModel>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  ingredient: IngredientModel;
  ingredientId: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  recipe: RecipeModel;
  recipeId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RecipeLikeModel = {
  __typename?: 'RecipeLikeModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  recipe?: Maybe<RecipeModel>;
  recipeId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<UserModel>;
  userId: Scalars['String']['output'];
};

export type RecipeModel = {
  __typename?: 'RecipeModel';
  author: UserModel;
  authorId: Scalars['String']['output'];
  calories?: Maybe<Scalars['Int']['output']>;
  carbohydrates?: Maybe<Scalars['Int']['output']>;
  comments?: Maybe<Array<CommentModel>>;
  cookTime: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  cuisineType: Scalars['String']['output'];
  description: Scalars['String']['output'];
  difficulty: Difficulty;
  dishType?: Maybe<DishModel>;
  dishTypeId: Scalars['String']['output'];
  fats?: Maybe<Scalars['Int']['output']>;
  fiber?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  ingredients?: Maybe<Array<RecipeIngredientModel>>;
  likes?: Maybe<Array<RecipeLikeModel>>;
  prepTime: Scalars['Int']['output'];
  protein?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  slug: Scalars['String']['output'];
  steps?: Maybe<Array<RecipeStepModel>>;
  tags?: Maybe<Array<RecipeTagModel>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  views?: Maybe<Array<RecipeViewModel>>;
};

export type RecipeStepModel = {
  __typename?: 'RecipeStepModel';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imgUrl?: Maybe<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  recipe: RecipeModel;
  recipeId: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RecipeTagModel = {
  __typename?: 'RecipeTagModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  recipes?: Maybe<Array<RecipeModel>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type RecipeViewModel = {
  __typename?: 'RecipeViewModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  recipe: RecipeModel;
  recipeId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
};

export type RequestPasswordResetInput = {
  email: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export const Role = {
  Admin: 'ADMIN',
  User: 'USER'
} as const;

export type Role = typeof Role[keyof typeof Role];
export const Unit = {
  Cloves: 'CLOVES',
  Gram: 'GRAM',
  Milliliter: 'MILLILITER',
  Piece: 'PIECE',
  Tablespoon: 'TABLESPOON',
  Teaspoon: 'TEASPOON'
} as const;

export type Unit = typeof Unit[keyof typeof Unit];
export type UpdateBodyMeasurementInput = {
  activityLevel?: InputMaybe<ActivityLevel>;
  arm?: InputMaybe<Scalars['Int']['input']>;
  chest?: InputMaybe<Scalars['Int']['input']>;
  goalWeight?: InputMaybe<Scalars['Int']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  nutritionGoal?: InputMaybe<NutritionGoal>;
  thigh?: InputMaybe<Scalars['Int']['input']>;
  waist?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateProfileInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  photo?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  bodyMeasurement?: InputMaybe<UpdateBodyMeasurementInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  isEmailVerified: Scalars['Boolean']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<UpdateProfileInput>;
  role?: InputMaybe<Role>;
};

export type UserModel = {
  __typename?: 'UserModel';
  bodyMeasurement?: Maybe<BodyMeasurementModel>;
  comment?: Maybe<Array<CommentModel>>;
  commentLike?: Maybe<Array<CommentLikeModel>>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  order?: Maybe<Array<OrderModel>>;
  profile?: Maybe<ProfileModel>;
  recipe?: Maybe<Array<RecipeModel>>;
  recipeLike?: Maybe<Array<RecipeLikeModel>>;
  recipeView?: Maybe<Array<RecipeViewModel>>;
  role: Role;
  updatedAt: Scalars['DateTime']['output'];
};

export type GetNewTokensQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNewTokensQuery = { __typename?: 'Query', refreshToken: { __typename?: 'AuthResponse', user: { __typename?: 'UserModel', email: string, role: Role } } };

export type LoginMutationVariables = Exact<{
  data: AuthInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', user: { __typename?: 'UserModel', id: string, email: string, role: Role, isEmailVerified: boolean } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'UserModel', id: string, email: string, role: Role, isEmailVerified: boolean, profile?: { __typename?: 'ProfileModel', fullName: string, gender?: Gender | null, age?: number | null, bio?: string | null, contact?: string | null, photo?: string | null } | null, bodyMeasurement?: { __typename?: 'BodyMeasurementModel', height?: number | null, weight?: number | null, chest?: number | null, waist?: number | null, thigh?: number | null, arm?: number | null, goalWeight?: number | null, activityLevel?: ActivityLevel | null, nutritionGoal?: NutritionGoal | null } | null } };

export type RegisterMutationVariables = Exact<{
  data: AuthInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthResponse', user: { __typename?: 'UserModel', id: string, email: string, role: Role, isEmailVerified: boolean } } };

export type RequestPasswordResetMutationVariables = Exact<{
  data: RequestPasswordResetInput;
}>;


export type RequestPasswordResetMutation = { __typename?: 'Mutation', requestPasswordReset: boolean };

export type ResetPasswordMutationVariables = Exact<{
  data: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type VerifyEmailMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifyEmailMutation = { __typename?: 'Mutation', verifyEmail: boolean };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', me: { __typename?: 'UserModel', id: string, email: string, role: Role, isEmailVerified: boolean, profile?: { __typename?: 'ProfileModel', fullName: string, gender?: Gender | null, age?: number | null, bio?: string | null, contact?: string | null, photo?: string | null } | null, bodyMeasurement?: { __typename?: 'BodyMeasurementModel', height?: number | null, weight?: number | null, chest?: number | null, waist?: number | null, thigh?: number | null, arm?: number | null, goalWeight?: number | null, activityLevel?: ActivityLevel | null, nutritionGoal?: NutritionGoal | null } | null } };

export type UpdateProfileMutationVariables = Exact<{
  data: UpdateUserInput;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'UserModel', id: string, email: string, role: Role, isEmailVerified: boolean, profile?: { __typename?: 'ProfileModel', fullName: string, gender?: Gender | null, age?: number | null, bio?: string | null, contact?: string | null, photo?: string | null } | null, bodyMeasurement?: { __typename?: 'BodyMeasurementModel', height?: number | null, weight?: number | null, chest?: number | null, waist?: number | null, thigh?: number | null, arm?: number | null, goalWeight?: number | null, activityLevel?: ActivityLevel | null, nutritionGoal?: NutritionGoal | null } | null } };


export const GetNewTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNewTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<GetNewTokensQuery, GetNewTokensQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"isEmailVerified"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"isEmailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"contact"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bodyMeasurement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"chest"}},{"kind":"Field","name":{"kind":"Name","value":"waist"}},{"kind":"Field","name":{"kind":"Name","value":"thigh"}},{"kind":"Field","name":{"kind":"Name","value":"arm"}},{"kind":"Field","name":{"kind":"Name","value":"goalWeight"}},{"kind":"Field","name":{"kind":"Name","value":"activityLevel"}},{"kind":"Field","name":{"kind":"Name","value":"nutritionGoal"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"isEmailVerified"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const RequestPasswordResetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RequestPasswordReset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RequestPasswordResetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestPasswordReset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>;
export const ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResetPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const VerifyEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}]}]}}]} as unknown as DocumentNode<VerifyEmailMutation, VerifyEmailMutationVariables>;
export const GetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"isEmailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"contact"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bodyMeasurement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"chest"}},{"kind":"Field","name":{"kind":"Name","value":"waist"}},{"kind":"Field","name":{"kind":"Name","value":"thigh"}},{"kind":"Field","name":{"kind":"Name","value":"arm"}},{"kind":"Field","name":{"kind":"Name","value":"goalWeight"}},{"kind":"Field","name":{"kind":"Name","value":"activityLevel"}},{"kind":"Field","name":{"kind":"Name","value":"nutritionGoal"}}]}}]}}]}}]} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;
export const UpdateProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"isEmailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"contact"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bodyMeasurement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"chest"}},{"kind":"Field","name":{"kind":"Name","value":"waist"}},{"kind":"Field","name":{"kind":"Name","value":"thigh"}},{"kind":"Field","name":{"kind":"Name","value":"arm"}},{"kind":"Field","name":{"kind":"Name","value":"goalWeight"}},{"kind":"Field","name":{"kind":"Name","value":"activityLevel"}},{"kind":"Field","name":{"kind":"Name","value":"nutritionGoal"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProfileMutation, UpdateProfileMutationVariables>;