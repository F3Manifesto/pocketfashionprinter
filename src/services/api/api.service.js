import { request } from 'graphql-request'
import config from '@utils/config'
import { DEV_HTTP_NETWORK_URL, MATIC_NETWORK_URL } from '@constants/global.constants'
import {
  getAuctionContracts,
  getDigitalaxGarmentNftV2GlobalStats
} from '@services/api/gql.apiService'

class APIService {
  constructor() {
    this.url = DEV_HTTP_NETWORK_URL
  }

  setUrl(url) {
    this.url = url
  }

  async getAuctionContracts() {
    return request(this.url, getAuctionContracts)
  }

  async getGlobalStats() {
    return request(MATIC_NETWORK_URL, getDigitalaxGarmentNftV2GlobalStats)
  }
}

export default new APIService()
