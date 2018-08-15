const KEY = 'goods'

export const getLocalGoods = () => {
  return wx.getStorageSync(KEY) || {}
}

// goods {goodsId:87,count:3}
export const addLocalGoods = (goods) => {
  const localGoods = getLocalGoods()

  if (localGoods[goods.goodsId]) {
    localGoods[goods.goodsId] += goods.count
  } else {
    localGoods[goods.goodsId] = goods.count
  }

  wx.setStorageSync(KEY, localGoods)
}

export const updateLocalGoods = (goods) => {
  const localGoods = getLocalGoods()

  localGoods[goods.goodsId] = goods.count

  wx.setStorageSync(KEY, localGoods)
}

export const deleteGoodsById = (goodsId) => {
  const localGoods = getLocalGoods()

  delete localGoods[goodsId]

  wx.setStorageSync(KEY, localGoods)
}
