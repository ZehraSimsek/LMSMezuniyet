const { gql, default: request } = require("graphql-request")
const MASTER_URL = "https://api-eu-west-2.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + "/master"
const API_TOKEN_ENDPOINT = "https://api-eu-west-2.hygraph.com/v2/" + process.env.TOKEN_ENDPOINT + "/master/upload";

const getAllCourseList = async () => {
  const query = gql` 
   query MyQuery {
    courseLists(first: 20, orderBy: createdAt_DESC) {
      name
      id
      free
      price
      description
      banner {
        url
      }
      chapter {
        ... on Chapter {
          id
          name
          shortDesc
          chapterNumber
          video {
            url
            id
            fileName
          }
        }
      }
      totalChapters
      tag
      slug
      authorEmail
      counterEnroll
    }
  }
   `
  const result = await request(MASTER_URL, query)
  console.log(result);
  return result;
}

const getSideBanner = async () => {
  const query = gql`
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
  const result = await request(MASTER_URL, query)
  console.log(result);
  return result;
}

const getCourseById = async (courseId) => {
  const query = gql`
      query MyQuery {
        courseList(where: {slug:"`+ courseId + `"}) {
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
          description
          free
          price
          id
          name
          slug
          tag
          totalChapters
        }
      }
    `
  const result = await request(MASTER_URL, query)
  console.log(result);
  return result;
}

const getUserEnrollDetail = async (courseId, email) => {
  const query = gql`
    query MyQuery {
      userEnrollCourses(
          where: {
            courseId: "`+ courseId + `",
            userEmail: "`+ email + `"})
            {
              id
            }
    }
  `
  const result = await request(MASTER_URL, query)
  console.log(result);
  return result;
}

const getUserEnrolledCourseDetails = async (id, email) => {
  const query = gql`
    query MyQuery {
      userEnrollCourses(where: {
        id:"`+ id + `", 
        userEmail: "`+ email + `"
      })
      {
        courseId
        id
        userEmail
        completedChapter{
          ... on CompletedChapter{
            id
            chapterId
          }
        }
        courseList{
          banner{
            url
          }
          chapter{
            ... on Chapter {
              id 
              name 
              shortDesc
              video {
                url
              }
            }
          }
          description
          free
          id
          name
          slug
          totalChapters
        }
      }
    }
  `
  const result = await request(MASTER_URL, query)
  return result;
}

const enrollToCourse = async (courseId, email) => {
  const query = gql`
    mutation MyMutation {
      createUserEnrollCourse(
        data: {courseId:"`+ courseId + `" , userEmail:"` + email + `" , courseList:{connect: {id : "` + courseId + `"}} }
      )
      {
        id
      }
      publishManyUserEnrollCoursesConnection{
        edges {
          node {
            id
          }
        }
      }
    }
  `
  const result = await request(MASTER_URL, query);
  return result;
}

const markChapterCompleted = async (enrollId, chapterId, isCompleted) => {
  const query = gql`
    mutation MyMutation {
      updateUserEnrollCourse(
        data: {
          completedChapter: {
            create: {
              CompletedChapter: {
                data: {
                  chapterId: "` + chapterId + `",
                  isCompleted: ` + isCompleted + `
                }
              }
            }
          }
        }
        where: {id: "` + enrollId + `"}
      ) {
        id
      }
      publishUserEnrollCourse(where: {id: "` + enrollId + `"}){
        id
      }
    }
  `

  const result = await request(MASTER_URL, query);
  return result;
}

const getChapterCompletionStatus = async (courseId, email) => {
  const query = gql`
    query MyQuery($courseId: String!, $email: String!) {
      userEnrollCourses(where: { courseId: $courseId, userEmail: $email }) {
        completedChapter {
          ... on CompletedChapter {
            isCompleted
            chapterId
          }
        }
      }
    }
  `;

  const variables = { courseId, email };
  const result = await request(MASTER_URL, query, variables);
  return result;
};


// const getChapterCompletionStatus = async (enrollId, chapterId) => {
//   const query = gql`
//     query MyQuery {
//       userEnrollCourses(where: {id: "` + enrollId + `"}) {
//         completedChapter(where: {chapterId: "` + chapterId + `"}) {
//           isCompleted
//         }
//       }
//     }
//   `

//   const result = await request(MASTER_URL, query);
//   return result;
// }


// const markChapterCompleted = async(email, chapterId) => {
//   const query = gql `
//     mutation MyMutation {
//       updateUserEnrollCourses(
//         data: {completedChapter : {
//           create : {
//             CompletedChapter : {data: {chapterId:"`+chapterId+`"}}
//           }
//         }}
//         where : {userEmail:"`+email+`"}
//       ){
//         id
//       }
//       publishUserEnrollCourse(where: {userEmail:"`+email+`"}){
//         id
//       }
//     }
//   `

//   const result = await request(MASTER_URL,query);
//   return result;
// }


const getUserAllEnrolledCourseList = async (email) => {
  const query = gql`
      query Myquery{
        userEnrollCourses(where: {
          userEmail: "`+ email + `"
        }) {
          completedChapter{ 
            ... on CompletedChapter{
              id
              chapterId
              isCompleted
            }
          }
          courseId
          courseList{
            name
            id
            totalChapters
            slug
            free
            description
            chapter{
              ... on Chapter{
                id
                name
              }
            }
            banner{
              url
            }
          }
        }
      }
  `

  const result = await request(MASTER_URL, query);
  return result;
}

// const createCourse = async ({ name, description,authorEmail, totalChapters, price, free , selectedCategory}) => {
//   const mutationQuery = gql`
//     mutation MyMutation {
//       createCourseList(
//         data: {
//           name: "${name}"
//           description: "${description}"
//           totalChapters: ${totalChapters}
//           price: ${price}
//           free: ${free}
//           authorEmail: "${authorEmail}"
//           tag : ${selectedCategory}
//         }
//       ) {
//         id
//       }
//     }
//   `;

//   const result = await request(MASTER_URL, mutationQuery);
//   return result;
// };

// const createCourse = async ({ name, description, authorEmail, totalChapters, price, free, selectedCategory }) => {
//   const createCourseMutation = gql`
//     mutation MyMutation {
//       createCourseList(
//         data: {
//           name: "${name}"
//           description: "${description}"
//           totalChapters: ${totalChapters}
//           price: ${price}
//           free: ${free}
//           authorEmail: "${authorEmail}"
//           tag: ${selectedCategory}
//         }
//       ) {
//         id
//       }
//     }
//   `;
//   const createResult = await request(MASTER_URL, createCourseMutation);
//   return createResult;
// };


// const createCourse = async ({ name, description, authorEmail, totalChapters, price, selectedCategory, coverPhoto }) => {
//   const slug = name.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');

//   const free = price > 0 ? false : true;
//   const createCourseMutation = gql`
//     mutation MyMutation {
//       createCourseList(
//         data: {
//           name: "${name}"
//           description: "${description}"
//           totalChapters: ${totalChapters}
//           price: ${price}
//           free: ${free}
//           authorEmail: "${authorEmail}"
//           tag: ${selectedCategory}
//           slug: "${slug}"
//           banner: { connect: { id: "${coverPhoto}" } }
//           counterEnroll: 0 
//         }
//       ) {
//         id
//       }
//     }
//   `;
//   const createResult = await request(MASTER_URL, createCourseMutation);
//   return createResult;
// };

const createCourse = async ({ name, description, authorEmail, totalChapters, price, selectedCategory, coverPhoto, chapterName, chapterNum, chapterDesc, videoUri }) => {
  const slug = name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

  const free = price > 0 ? false : true;
  const createCourseMutation = gql`
    mutation MyMutation {
      createCourseList(
        data: {
          name: "${name}"
          description: "${description}"
          totalChapters: ${totalChapters}
          price: ${price}
          free: ${free}
          authorEmail: "${authorEmail}"
          tag: ${selectedCategory}
          slug: "${slug}"
          banner: { connect: { id: "${coverPhoto}" } }
          counterEnroll: 0
          chapter: {create: {Chapter: {
            name: "${chapterName}", 
            chapterNumber: ${chapterNum}, 
            shortDesc: "${chapterDesc}",
            video:  {connect: {id: "${videoUri}" }}
          }
          }
        }
        }
      ) {
        id
      }
    }
  `;

  const createResult = await request(MASTER_URL, createCourseMutation);
  return createResult;
};

const addChapter = async ({courseId, chapterName, chapterNum, chapterDesc, videoUri}) => {
  const addChapterMutation = gql`
  mutation MyMutation{
    updateCourseList(
      data: {
        chapter: {
          create: {
            Chapter: {
              data: {
                name: "${chapterName}", 
                chapterNumber: ${chapterNum}, 
                shortDesc: "${chapterDesc}",
                video:  {connect: {id: "${videoUri}" }}
              }
            }
          }
        }
      }
      where: { id: "${courseId}" }
    ) {
      id
    }
  }
  `;
  const publishResult = await request(MASTER_URL, addChapterMutation);
  return publishResult;
};

const updateChapter = async ({courseId, chapterId, chapterName, chapterNum, chapterDesc}) => {
  const updateChapterMutation = gql`
  mutation MyMutation {
    updateCourseList(
      data: {chapter: {update: 
        {
          Chapter: { where: {id: "${chapterId}"}, 
          data: {
            chapterNumber: ${chapterNum}, 
            name: "${chapterName}", 
            shortDesc: "${chapterDesc}"
            
          }
        }}}}
      where: {id: "${courseId}"}
    ) {
      id
    }
  }
  
  `;
  const publishResult = await request(MASTER_URL, updateChapterMutation);
  return publishResult;
};


const publishCourse = async (courseId) => {
  const publishCourseMutation = gql`
    mutation MyMutation {
      publishCourseList(
        where: { id: "${courseId}" }
        to: PUBLISHED
      ) {
        id
      }
    }
  `;
  const publishCourseResult = await request(MASTER_URL, publishCourseMutation);
  return publishCourseResult;
};

const publishAsset = async (assetId) => {
  const publishAssetMutation = gql`
    mutation PublishAsset {
      publishAsset(
        where: { id: "${assetId}" }
        to: PUBLISHED
      ) {
        id
      }
    }
  `;

  const publishResult = await request(MASTER_URL, publishAssetMutation);
  return publishResult;
};



const counterEnroll = async (courseId, counter) => {
  const mutationQuery = gql`
    mutation MyMutation {
      updateCourseList(
        where: { id: "` + courseId + `" },
        data: { counterEnroll: ${counter} }
      ) {
        counterEnroll
        id
      }
      publishCourseList(where: {id: "` + courseId + `"}, to: PUBLISHED) {
        counterEnroll
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, mutationQuery);
    return result;
  } catch (error) {
    console.error('Counter artırma hatası:', error);
    throw error;
  }
};


const GetCounter = async (courseId) => {
  const query = gql`
    query MyQuery {
      courseList(where: {id: "${courseId}"}) {
        counterEnroll
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const GetIstatisticCourse = async (authorEmail) => {
  const query = gql`
  query MyQuery {
    courseLists(where: {authorEmail: "${authorEmail}"}) {
      id
      name
      price
      counterEnroll
      free
    }
  }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const deleteCourse = async (courseId) => {
  try {
    const mutationQuery = gql`
      mutation MyMutation {
        deleteCourseList(where: {id: "${courseId}"}) {
          id
        }
      }
    `;
    const result = await request(MASTER_URL, mutationQuery);
    return result;
  } catch (error) {
    console.error('GraphQL isteği sırasında hata oluştu:', error);
    throw new Error('GraphQL isteği sırasında hata oluştu');
  }
};

const deleteEnrolledCourse = async (courseId) => {
  const deleteUserEnrolledCourse = gql`
  mutation MyMutation {
    deleteManyUserEnrollCourses(where: { courseId: "${courseId}" }) {
      count
    }
  }
  `;

  const publishResult = await request(MASTER_URL, deleteUserEnrolledCourse);
  return publishResult;
};

const updateCourse = async ({ courseId, coverPhoto, name, description, totalChapters, price, selectedCategory }) => {
  const slug = name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

  const free = price > 0 ? false : true;
  const updateCourseMutation = gql`
    mutation MyMutation {
      updateCourseList(
        where: { id: "${courseId}" }
        data: {
          name: "${name}"
          description: "${description}"
          totalChapters: ${totalChapters}
          price: ${price}
          free: ${free}
          tag: ${selectedCategory}
          banner: { connect: { id: "${coverPhoto}" } }
          slug: "${slug}"
        }
      ) {
        id
      }
    }
  `;
  const updateResult = await request(MASTER_URL, updateCourseMutation);
  return updateResult;
};


export default {
  getAllCourseList,
  getSideBanner,
  getCourseById,
  getUserEnrollDetail,
  enrollToCourse,
  getUserEnrolledCourseDetails,
  markChapterCompleted,
  getUserAllEnrolledCourseList,
  createCourse,
  counterEnroll,
  GetCounter,
  GetIstatisticCourse,
  deleteCourse,
  publishCourse,
  updateCourse,
  getChapterCompletionStatus,
  publishAsset,
  addChapter,
  deleteEnrolledCourse,
  updateChapter,
}