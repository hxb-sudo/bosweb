import request from '../utils/request'
import qs from 'qs'


export function list () {
  return request({
    contentType: 'application/json',
    url: '/basicarchives/list',
    method: 'post',
  })
}

export function add(basicarchives) {
  return request({
    contentType: 'application/json',
    url: '/basicarchives/add',
    method: 'post',
    data: qs.stringify(basicarchives)
  })
}

export function edit(basicarchives) {
  return request({
    contentType: 'application/json',
    url: '/basicarchives/edit',
    method: 'post',
    data: qs.stringify(basicarchives)
  })
}
