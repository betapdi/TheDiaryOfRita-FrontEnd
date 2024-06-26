import axiosClient from "./axiosClient"
import axiosPrivate from "./axiosPrivate"

const mangaApi = {
  getAll: (params) => {
    const url = '/mangaApp/mangaList/'
    return axiosClient.get(url, { params })
  },

  getMangaData: (id) => {
    const url = `/mangaApp/${id}/`
    return axiosClient.get(url)
  },

  getChapterList: (id) => {
    const url = `/mangaApp/${id}/chapterList/`
    return axiosClient.get(url);
  },

  getAllCategories: () => {
    const url = '/mangaApp/categoryList/'
    return axiosClient.get(url)
  },

  getAllFavourites: () => {
    const url = '/mangaApp/favourites/'
    return axiosPrivate.get(url)
  },
  
  getTopMangas: () => {
    const url = '/mangaApp/topMangas/'
    return axiosClient.get(url)
  },

  getChapterImages: (mangaId, chapterId) => {
    const url = `/mangaApp/${mangaId}/${chapterId}/`
    return axiosClient.get(url);
  },

  getAlbumList: () => {
    const url = '/mangaApp/albums/'
    return axiosPrivate.get(url);
  },

  getAlbumMangaList: (albumId) => {
    const url = `/mangaApp/albums/${albumId}/`
    return axiosPrivate.get(url);
  },

  addManga: (data) => {
    const formData = new FormData()
    formData.append('mangaName', data.mangaName)
    formData.append('description', data.description)
    data.categories.map(category => (
      formData.append('categories', category)
    ))
    formData.append('cover_image', data.cover_image)

    const url = '/mangaApp/newManga/'
    const result = axiosPrivate.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
    
    return result
  },

  addChapter: (data) => {
    const formData = new FormData()
    formData.append('chapterId', data.chapter_id)
    formData.append('chapterData', data.chapter_data)

    const url = `/mangaApp/${data.manga_name}/chapter/upload/`
    return axiosPrivate.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
  },

  addMultipleChapters: (data) => {
    const formData = new FormData()
    formData.append('chapterData', data.chapter_data)

    const url = `/mangaApp/${data.manga_name}/chapter/uploadMulti/`
    return axiosPrivate.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
  },

  addMangaAlbum: (data) => {
    const url = `/mangaApp/albums/add/${data.albumId}/${data.mangaId}/`
    return axiosPrivate.post(url);
  },

  deleteManga: (id) => {
    const url = `/mangaApp/${id}/delete/`;
    return axiosPrivate.delete(url);
  },

  deleteChapter: (mangaId, chapterId) => {
    const url = `/mangaApp/${mangaId}/${chapterId}/delete/`;
    return axiosPrivate.delete(url)
  },

  deleteAlbum: (albumId) => {
    const url = `/mangaApp/albums/delete/${albumId}`;
    return axiosPrivate.delete(url)
  },

  removeMangaAlbum: (data) => {
    console.log(data)
    const url = `/mangaApp/albums/remove/${data.albumId}/${data.mangaId}/`
    return axiosPrivate.delete(url)
  },

  //To Do: Check authorization when upload data
}

export default mangaApi;