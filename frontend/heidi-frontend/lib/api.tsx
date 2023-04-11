
export const getCollections = client.createApiUtil<collection[]>('getCollectionsQuery');

// here also you can set the default caching strategy
export const getCollection = client.createApiUtil<collection, { id: string }>(
  'getCollectionQuery',
  {
    cache: 'no-cache'
  }
);

// or use your own query
export const getProducts = client.createApiUtil<Product[]>(queries.getProducts, {
    cache: 'no-cache'
  });