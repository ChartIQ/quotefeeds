export namespace CIQ.QuoteFeed {
  /**
   * Xignite version of quotes which uses web API to fetch data.
   * Pass the Xignite provided token to the constructor ( intended for internal testing only).
   * If constructed without a token then the CIQ.QuoteFeed.Xignite.Utility.overrides members will be examined for rules on building the url path and token.
   *
   * **Note:** please review the following tutorial about data accessibility before attempting to request data from the browser : {@tutorial CORS}
   *
   * - If you need to have a different protocol than the default ("https://") add the following line, changing the protocol as needed.
   * 		CIQ.QuoteFeed.Xignite.Utility.overrides.protocol="https://";
   *
   * - If you need to have a different path than the defaults (see proxy config sample) add the following line. The same path will be appended to all calls.
   * 		CIQ.QuoteFeed.Xignite.Utility.overrides.path="your path here";
   *
   * - If you need to point to a specific server add the following line.
   * 		CIQ.QuoteFeed.Xignite.Utility.overrides.server = serverhere;
   *
   * - To set the **encrypted** token add the following line
   *		CIQ.QuoteFeed.Xignite.Utility.overrides.token = encryptedTokenHere;
   *
   * - To set the userid  add the following line
   *		CIQ.QuoteFeed.Xignite.Utility.overrides.tokenUser= userIdHere;
   *
   *	**Notes:**
   *	- The client is responsible for the formation and management of the encrypted token.
   *	- The client should make sure they have a non-expired token before querying Xignite.
   *	- The client should be writing their own encryption **on the server side**.
   *	- The client may store their unencrypted token within this script or elsewhere on their server, but **not on the files delivered by the web server**.
   *
   * @example Default use case
   * stxx.attachQuoteFeed(new CIQ.QuoteFeed.Xignite(myToken));
   *
   * @example Using an encrypted token
   * CIQ.QuoteFeed.Xignite.Utility.overrides.protocol = null;
   * CIQ.QuoteFeed.Xignite.Utility.overrides.server = null;
   * CIQ.QuoteFeed.Xignite.Utility.overrides.path = "";  // note this is "" and not null
   * CIQ.QuoteFeed.Xignite.Utility.overrides.token = 'encrypted token';
   * CIQ.QuoteFeed.Xignite.Utility.overrides.tokenUser= 'firm';
   * stxx.attachQuoteFeed(new CIQ.QuoteFeed.Xignite());
   *
   * @example Using a proxy server
   * CIQ.QuoteFeed.Xignite.Utility.overrides.server="yourProxyServer.yourCompany.com";
   * stxx.attachQuoteFeed(new CIQ.QuoteFeed.Xignite());
   * // Then, have your proxy inject the token, firm, etc. as required by Xignite and relay the request.
   *
   */
  class Xignite {
    /**
     * Xignite version of quotes which uses web API to fetch data.
     * Pass the Xignite provided token to the constructor ( intended for internal testing only).
     * If constructed without a token then the CIQ.QuoteFeed.Xignite.Utility.overrides members will be examined for rules on building the url path and token.
     *
     * **Note:** please review the following tutorial about data accessibility before attempting to request data from the browser : {@tutorial CORS}
     *
     * - If you need to have a different protocol than the default ("https://") add the following line, changing the protocol as needed.
     * 		CIQ.QuoteFeed.Xignite.Utility.overrides.protocol="https://";
     *
     * - If you need to have a different path than the defaults (see proxy config sample) add the following line. The same path will be appended to all calls.
     * 		CIQ.QuoteFeed.Xignite.Utility.overrides.path="your path here";
     *
     * - If you need to point to a specific server add the following line.
     * 		CIQ.QuoteFeed.Xignite.Utility.overrides.server = serverhere;
     *
     * - To set the **encrypted** token add the following line
     *		CIQ.QuoteFeed.Xignite.Utility.overrides.token = encryptedTokenHere;
     *
     * - To set the userid  add the following line
     *		CIQ.QuoteFeed.Xignite.Utility.overrides.tokenUser= userIdHere;
     *
     *	**Notes:**
     *	- The client is responsible for the formation and management of the encrypted token.
     *	- The client should make sure they have a non-expired token before querying Xignite.
     *	- The client should be writing their own encryption **on the server side**.
     *	- The client may store their unencrypted token within this script or elsewhere on their server, but **not on the files delivered by the web server**.
     *
     * @example Default use case
     * stxx.attachQuoteFeed(new CIQ.QuoteFeed.Xignite(myToken));
     *
     * @example Using an encrypted token
     * CIQ.QuoteFeed.Xignite.Utility.overrides.protocol = null;
     * CIQ.QuoteFeed.Xignite.Utility.overrides.server = null;
     * CIQ.QuoteFeed.Xignite.Utility.overrides.path = "";  // note this is "" and not null
     * CIQ.QuoteFeed.Xignite.Utility.overrides.token = 'encrypted token';
     * CIQ.QuoteFeed.Xignite.Utility.overrides.tokenUser= 'firm';
     * stxx.attachQuoteFeed(new CIQ.QuoteFeed.Xignite());
     *
     * @example Using a proxy server
     * CIQ.QuoteFeed.Xignite.Utility.overrides.server="yourProxyServer.yourCompany.com";
     * stxx.attachQuoteFeed(new CIQ.QuoteFeed.Xignite());
     * // Then, have your proxy inject the token, firm, etc. as required by Xignite and relay the request.
     *
     * @param  [token] optional Xignite API token
     * @param  [params] optional Xignite parameters
     */
    constructor(token?: string, params?: object)
  }
}

