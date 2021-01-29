import request from '../utils/request'
import qs from 'qs'


export function list () {
  return request({
    contentType: 'application/json',
    url: '/deliverystandard/list',
    method: 'post',
  })
}

export function invalid(ID) {
  return request({
    contentType: 'application/json',
    url: '/deliverystandard/invalid',
    method: 'post',
    data: qs.stringify({id: ID})
  })
}

export function add(deliverystandard) {
  return request({
    contentType: 'application/json',
    url: '/deliverystandard/add',
    method: 'post',
    data: qs.stringify(deliverystandard)
  })
}

export function edit(deliverystandard) {
  return request({
    contentType: 'application/json',
    url: '/deliverystandard/edit',
    method: 'post',
    data: qs.stringify(deliverystandard)
  })
}

