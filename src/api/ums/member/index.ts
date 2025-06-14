import request from "@/utils/request";
import { AxiosPromise } from "axios";
import { MemberQuery, MemberPageResult } from "./types";

/**
 * 获取会员分页列表
 *
 * @param queryParams
 */
export function getMemberPage(
  queryParams: MemberQuery
): AxiosPromise<MemberPageResult> {
  return request({
    url: "/aioveu-ums/api/v1/members",
    method: "get",
    params: queryParams,
  });
}

/**
 * 获取会员详情
 *
 * @param id
 */
export function getMemberDetail(id: number) {
  return request({
    url: "/aioveu-ums/api/v1/members/" + id,
    method: "get",
  });
}

/**
 * 添加会员
 *
 * @param data
 */
export function addMember(data: object) {
  return request({
    url: "/aioveu-ums/api/v1/members",
    method: "post",
    data: data,
  });
}

/**
 * 添加会员
 *
 * @param id
 * @param data
 */
export function updateMember(id: number, data: object) {
  return request({
    url: "/aioveu-ums/api/v1/members/" + id,
    method: "put",
    data: data,
  });
}
