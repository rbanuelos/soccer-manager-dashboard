import * as mongoDB from 'mongodb'
import * as dotenv from 'dotenv'
import { TacticGroup } from '../models'

export const collections: { tacticGroup?: mongoDB.Collection<TacticGroup> } = {}

export async function connectToDatabase (): Promise<void> {
  dotenv.config()
  if (process.env.DB_CONN_STRING === undefined ||
    process.env.TACTIC_COLLECTION_NAME === undefined) {
    throw Error('Missing DB configuration')
  }

  const client: mongoDB.MongoClient = await getConnectionClient(
    process.env.DB_CONN_STRING
  )

  collections.tacticGroup = getCollection(
    client,
    process.env.TACTIC_COLLECTION_NAME
  )
}

async function getConnectionClient (
  connectionString: string
): Promise<mongoDB.MongoClient> {
  return await new mongoDB.MongoClient(connectionString).connect()
}

function getCollection (
  client: mongoDB.MongoClient,
  collectionName: string
): mongoDB.Collection<TacticGroup> {
  const db: mongoDB.Db = client.db()
  return db.collection<TacticGroup>(collectionName)
}
