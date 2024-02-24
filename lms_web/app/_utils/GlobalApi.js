// const {gql, default: request} = require("graphql-request")

// const MASTER_URL = "https://api-eu-west-2.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

// const getAllCourseList = async() => {
//     const query = gql`
//         query MyQuery {
//             courseLists {
//             author
//             name
//             id
//             free
//             description
//             demoUrl
//             banner {
//                 url
//             }
//             chapter {
//                 ... on Chapter {
//                 id
//                 name
//                 video {
//                     url
//                 }
//                 }
//             }
//             totalChapters
//             sourceCode
//             tag
//             }
//         }
//     `
//     const result = await request(MASTER_URL, query);
//     return result;
// }

// export default{
//     getAllCourseList
// }

const { gql, default: request } = require("graphql-request")
const MASTER_URL = "https://api-eu-west-2.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

const getAllCourseList = async() => {
   const query = gql ` 
   query MyQuery {
    courseLists(first: 20, orderBy: createdAt_DESC) {
      author
      name
      id
      free
      description
      demoUrl
      banner {
        url
      }
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
        }
      }
      totalChapters
      sourceCode
      tag
      slug
    }
  }
   `
   const result = await request(MASTER_URL,query)
   console.log(result);
   return result;
}

const getSideBanner = async() => {
  const query = gql `
  query GetSideBanner {
    sideBanners {
      id
      name
      banner {
        id
        url
      }
      url
    }
  }
  `
  const result = await request(MASTER_URL,query)
  console.log(result);
  return result;
}

const getCourseById = async (courseId) => {
    const query = gql `
      query MyQuery {
        courseList(where: {slug:"`+courseId+`"}) {
          author
          banner {
            url
          }
          chapter {
            ... on Chapter {
              id
              name
              video {
                url
              }
            }
          }
          demoUrl
          description
          free
          id
          name
          slug
          sourceCode
          tag
          totalChapters
        }
      }
    `
    const result = await request(MASTER_URL,query)
    console.log(result);
    return result;
}

const getUserEnrollDetail = async() => {
  const query = gql ``
  const result = await request(MASTER_URL,query)
  console.log(result);
  return result;
}

export default {
    getAllCourseList,
    getSideBanner,
    getCourseById,
    getUserEnrollDetail
}