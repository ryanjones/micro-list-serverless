# Micro List (serverless)
 An app that lists out AWS serverless functions




query ListServices {
  listServices {
    services {
      id
    }
    nextToken
  }
}