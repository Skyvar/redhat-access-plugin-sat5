'use strict';

/**
 * @ngdoc service
 * @name sat5TelemetryApp.Admin
 * @description
 * # Systems
 * Service in the sat5TelemetryApp.
 */
angular.module('sat5TelemetryApp')
.factory('Admin', function (
$http, 
EVENTS, 
CONFIG_URLS, 
HTTP_CONST,
CONFIG_KEYS,
ADMIN_TABS) {

  var _tab = ADMIN_TABS.GENERAL;
  var _enabled = false;
  var _username = "";
  var _systems = [];
  var _pageSize = 10;
  var _page = 0;
  var _filteredSystemLength = 0;


  var setTab = function(tab) {
    _tab = tab;
  };

  var getTab = function() {
    return _tab;
  };

  var generalTabSelected = function() {
    return _tab === ADMIN_TABS.GENERAL;
  };

  var systemsTabSelected = function() {
    return _tab === ADMIN_TABS.SYSTEMS;
  };

  var getEnabled = function() {
    return _enabled;
  };

  var setEnabled = function(enabled) {
    _enabled = enabled;
  };

  var getUsername = function() {
    return _username;
  };

  var setUsername = function(username) {
    _username = username;
  };

  var setSystems = function(systems) {
    _systems = systems;
  };

  var getSystems = function() {
    return _systems;
  };

  var setPageSize = function(pageSize) {
    _pageSize = pageSize;
  };

  var getPageSize = function() {
    return _pageSize;
  };

  var setPage = function(page) {
    _page = page;
  };

  var getPage = function() {
    return _page;
  };

  var setFilteredSystems = function(filteredSystems) {
    _filteredSystems = filteredSystems;
  };

  var getFilteredSystems = function() {
    return _filteredSystems;
  };

  var getNumSystems = function() {
    //var numSystems = getSystems().length;
    //if (_filteredSystemLength !== 0 && numSystems > _filteredSystemLength) {
      //numSystems = _filteredSystemLength;
    //}
    //return numSystems;
    //return getFilteredSystems().length;
    return _filteredSystemLength;
  };

  var updateSystemLength = function(newLength) {
    _filteredSystemLength = newLength;
  };

  var getPageStart = function() {
    return getPage() * getPageSize();
  };
  /**
   * Scrape the username off the page. 
   * Need this for calls to Sat5 API in the proxy.
   */
  var getSatelliteUser = function() {
    return $('nav.navbar-pf > div.navbar-collapse > ul.navbar-nav > li > a[href="/rhn/account/UserDetails.do"]').text().trim();
  };

  var postConfig = function(enabled, username, password) {
    var headers = {};
    headers[HTTP_CONST.ACCEPT] = HTTP_CONST.APPLICATION_JSON;
    headers[HTTP_CONST.CONTENT_TYPE] = HTTP_CONST.APPLICATION_JSON;
    var params = {};
    params[CONFIG_KEYS.SATELLITE_USER] = getSatelliteUser();
    var data = {};
    data[CONFIG_KEYS.ENABLED] = enabled;
    data[CONFIG_KEYS.USERNAME] = username;
    if (password !== null) {
      data[CONFIG_KEYS.PASSWORD] = password;
    }
    var promise = $http({
      method: HTTP_CONST.POST,
      url: CONFIG_URLS.GENERAL,
      headers: headers,
      data: data,
      params: params
    });
    return promise;
  };

  var getConfig = function() {
    var headers = {};
    headers[HTTP_CONST.ACCEPT] = HTTP_CONST.APPLICATION_JSON;
    var params = {};
    params[CONFIG_KEYS.SATELLITE_USER] = getSatelliteUser();
    var promise = $http({
      method: HTTP_CONST.GET,
      url: CONFIG_URLS.GENERAL,
      headers: headers,
      params: params
    });
    return promise;
  };

  var postSystems = function(systems) {
    var headers = {};
    headers[HTTP_CONST.ACCEPT] = HTTP_CONST.APPLICATION_JSON;
    headers[HTTP_CONST.CONTENT_TYPE] = HTTP_CONST.APPLICATION_JSON;
    var params = {};
    params[CONFIG_KEYS.SATELLITE_USER] = getSatelliteUser();
    var data = systems;
    var promise = $http({
      method: HTTP_CONST.POST,
      url: CONFIG_URLS.SYSTEMS,
      headers: headers,
      params: params,
      data: data
    });
    return promise;
  };

  var getSystemsPromise = function() {
    var headers = {};
    headers[HTTP_CONST.ACCEPT] = HTTP_CONST.APPLICATION_JSON;
    var params = {};
    params[CONFIG_KEYS.SATELLITE_USER] = getSatelliteUser();
    var promise = $http({
      method: HTTP_CONST.GET,
      url: CONFIG_URLS.SYSTEMS,
      headers: headers,
      params: params
    });
    return promise;
  };

  return {
    postConfig: postConfig,
    getConfig: getConfig,
    setTab: setTab,
    getTab: getTab,
    generalTabSelected: generalTabSelected,
    systemsTabSelected: systemsTabSelected,
    getSystemsPromise: getSystemsPromise,
    postSystems: postSystems,
    getEnabled: getEnabled,
    setEnabled: setEnabled,
    setUsername: setUsername,
    getUsername: getUsername,
    getSystems: getSystems,
    setSystems: setSystems,
    getPageSize: getPageSize,
    setPageSize: setPageSize,
    getPage: getPage,
    setPage: setPage,
    getNumSystems: getNumSystems,
    getPageStart: getPageStart,
    updateSystemLength: updateSystemLength
  };
});
