// pages/film_details_recent_release/film_details_recent_release.js

const util = require('../../utils/util.js')

Page({
  data: {
    options: "",
    title: "",
    imgs:"",
    rating:"",
    directors:"",
    genres:"",
    casts0:"",
    casts1: "",
    casts2: "",
    year:""
  },
  onLoad: function (options) {
    this.setData({
      title: options.title,
      imgs: options.imgs,
      rating: options.rating,
      directors: options.directors,
      genres: options.genres,
      casts0: options.casts0,
      casts1: options.casts1,
      casts2: options.casts2,
      year: options.year
    })
  }
})
