import { apiVersion, dataset, projectId } from "../utils/env";

import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: true,
});
