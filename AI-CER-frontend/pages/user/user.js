
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },

  onLoad() {
  //  装事件
    if(app.globalData.userInfo){
      this.setData({
        userInfo:app.globalData.userInfo,
        hasUserInfo:true
      })
   } else if(this.data.canIUse){
    //  由于getUserInfo 是网络请求，可能会在Page.onload 之后才返回
    // 所以此处加入 callback 以防止这种情况
    app.userInfoReadyCallback = res =>{
      this.setData({
        userInfo:res.userInfo,
        hasUserInfo:true
      })
    }
   } else {
    //  在没有 open-type-getUserInfo 版本的兼容处理
    wx.getUserInfo({
      success: res =>{
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo:res.userInfo,
          hasUserInfo:true
        })
      }
    })
   }
   if(this.data.hasUserInfo){
     wx.navigateTo({
       url: './home',
     })
     app.globalData.userInfo = e.detail.userInfo
     this.setData({
       userInfo:e.detail.userInfo,
       hasUserInfo:true
     })
   }
  },

  getUserInfo:function(e){
    console.log(e)
    wx.navigateTo({
      url: './home',
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 直接返回匿名的用户个人信息
    console.log(e)

    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
