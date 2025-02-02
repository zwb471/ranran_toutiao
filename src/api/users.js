import store from '../store/index.js'
import req from '../utils/requests.js'

export const login = data => {
    return req({
        method: 'POST',
        url: '/v1_0/authorizations',
        data
    })
}

export const sendSms = num => {
    return req({
        method: 'GET',
        url: `/v1_0/sms/codes/${num}`
    })
}

// 获取用户信息
export const getUserinfo = () => {
    return req({
        method: 'GET',
        url: `/v1_0/user`,
        // headers:{
        //     Authorization:`Bearer ${store.state.user.token}`
        // }
    })
}


// 获取频道列表
export const getdata = () => {
    return req({
        method: 'GET',
        url: `/v1_0/user/channels`,
        // headers:{
        //     Authorization:`Bearer ${store.state.user.token}`
        // }
    })
}
// 获取频道数据
export const getChannel = params => {
    return req({
        method: 'GET',
        url: `/v1_0/articles`,
        params

    })
}

// 频道编辑
export const getAllChannels = () => {
    return req({
        method: 'GET',
        url: `/v1_0/channels`,

    })
}
// 添加用户频道
export const addUserChannels = (channel) => {
    return req({
        method: 'PATCH',
        url: `/v1_0/user/channels`,
        data: {
            channels: [channel]
        }
    })
}

// 删除用户自己频道
export const deleteUserChannels = (id) => {
    return req({
        method: 'DELETE',
        url: `/v1_0/user/channels/${id}`,
        data: {
            channels: [id]
        }
    })
}


// 联想建议
export const getSuggestions = (q) => {
    return req({
        method: 'GET',
        url: `/v1_0/suggestion`,
        params: {
            q
        }
    })
}


// 搜索结果
export const getResoult = params => {
    return req({
        method: 'GET',
        url: `/v1_0/search`,
        params


    })
}


// 文章页面详情
export const getarticlebyID = articleID => {
    return req({
        method: 'GET',
        url: `/v1_0/articles/${articleID}`,


    })
}

// 用户关注
export const addfollow = target => {
    return req({
        method: 'POST',
        url: `/v1_0/user/followings`,
        data: {
            target
        }

    })
}

// 用户取消关注
export const delfollow = target => {
    return req({
        method: 'DELETE',
        url: `/v1_0/user/followings/${target}`,


    })
}

// 用户收藏
export const addShoucang = target => {
    return req({
        method: 'POST',
        url: `/v1_0/article/collections`,
        data: {
            target
        }


    })
}

// 用户取消收藏
export const delShoucang = target => {
    return req({
        method: 'DELETE',
        url: `/v1_0/article/collections/${target}`,


    })
}

// 用户点赞
export const addLike = target => {
    return req({
        method: 'POST',
        url: `/v1_0/article/likings`,
        data: {
            target
        }


    })
}

// 用户取消点赞
export const delLike = target => {
    return req({
        method: 'DELETE',
        url: `/v1_0/article/likings/${target}`,


    })
}

// 获取评论
export const addcomments = params => {
    return req({
        method: 'GET',
        url: `/v1_0/comments`,
        params

    })
}

/**
 * 评论点赞
 */
export const addCommentLike = target => {
    return req({
        method: 'POST',
        url: '/v1_0/comment/likings',
        data: {
            target
        }
    })
}

/**
 * 取消评论点赞
 */
export const deleteCommentLike = target => {
    return req({
        method: 'DELETE',
        url: `/v1_0/comment/likings/${target}`
    })
}

/**
* 发布文章评论或评论回复
*/
export const addComment = data => {
    return req({
        method: 'POST',
        url: '/v1_0/comments',
        data
    })
}
/**
* 用户个人信息获取
*/
export const addusermessage = () => {
    return req({
        method: 'GET',
        url: '/v1_0/user/profile',

    })
}
/**
* 更改用户个人信息
*/
export const changeusermessage = (data) => {
    return req({
        method: 'PATCH',
        url: '/v1_0/user/profile',
        data

    })
}
/**
* 更新用户照片资料
*/
export const updateUserPhoto = data => {
    return req({
        method: 'PATCH',
        url: '/v1_0/user/photo',
        data
    })
}
/**
* 获取用户收藏列表
*/
export const getUserCollection = data => {
    return req({
        method: 'GET',
        url: '/v1_0/article/collections',
        params: {
            data
        }
    })
}
