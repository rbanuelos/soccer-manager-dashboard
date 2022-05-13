import * as mongoDB from 'mongodb'
import * as dotenv from 'dotenv'

export const collections: { userTactics?: mongoDB.Collection } = {}

export async function connectToDatabase (): Promise<void> {
  dotenv.config()
  if (process.env.DB_CONN_STRING === undefined ||
    process.env.DB_NAME === undefined ||
    process.env.GAMES_COLLECTION_NAME === undefined) {
    throw Error('Missing DB configuration')
  }

  const client: mongoDB.MongoClient = await getConnectionClient(
    process.env.DB_CONN_STRING
  )

  collections.userTactics = getCollection(
    client,
    process.env.DB_NAME,
    process.env.GAMES_COLLECTION_NAME
  )
}

async function getConnectionClient (
  connectionString: string
): Promise<mongoDB.MongoClient> {
  return await new mongoDB.MongoClient(connectionString).connect()
}

function getCollection (
  client: mongoDB.MongoClient,
  databaseName: string,
  collectionName: string
): mongoDB.Collection {
  const db: mongoDB.Db = client.db(databaseName)
  return db.collection(collectionName)
}
