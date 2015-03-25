
angular.module('sat5TelemetryApp')
.constant('EVENTS', {
  'SYSTEMS_POPULATED': 'systems_populated'
})
.constant('SYSTEM_PAGE_URLS', {
  'SYSTEM_OVERVIEW': 'systems/Overview.do',
  'SYSTEMS': 'systems/SystemList.do',
  'PHYSICAL': 'systems/PhysicalList.do',
  'VIRTUAL': 'systems/VirtualSystemsList.do',
  'OUT_OF_DATE': 'systems/OutOfDate.do',
  'REQUIRING_REBOOT': 'systems/RequiringReboot.do',
  'EXTRA_PACKAGES': 'systems/ExtraPackagesSystems.do',
  'UNENTITLED': 'systems/Unentitled.do',
  'UNGROUPED': 'systems/Ungrouped.do',
  'INACTIVE': 'systems/Inactive.do',
  'RECENTLY_REGISTERED': 'systems/Registered.do',
  'PROXY': 'systems/ProxyList.do',
  'DUPLICATE': 'systems/DuplicateIPList.do',
  'CURRENCY': 'systems/SystemCurrency.do',
  'DETAILS_OVERVIEW': 'systems/details/Overview.do',
  'INSIGHTS': 'systems/Insights.do'
})
.constant('ADMIN_PAGE_URLS', {
  'INSIGHTS': 'admin/Insights.do'
})
.constant('SYSTEM_DETAILS_PAGE_URLS', {
  'OVERVIEW': 'systems/details/Overview.do',
  'PROPERTIES': 'systems/details/Edit.do',
  'HARDWARE': 'systems/details/SystemHardware.do',
  'MIGRATE': 'systems/details/SystemMigrate.do',
  'NOTES': 'systems/details/Notes.do',
  'INSIGHTS': 'systems/details/Insights.do'
})
.constant('SAT5_ROOT_URLS', {
  'ADMIN': 'admin',
  'SYSTEMS': 'systems',
  'SYSTEM_DETAILS': 'systems/details',
  'SSM': 'ssm',
  'ACTIVATIONKEYS': 'activationkeys',
  'PROFILES': 'profiles',
  'KICKSTART': 'kickstart',
  'KEYS': 'keys',
  'RHN': 'rhn',
  'PROXY': 'insights'
})
.constant('HTTP_CONST', {
  'ACCEPT': 'accept',
  'APPLICATION_JSON': 'application/json',
  'CONTENT_TYPE': 'Content-Type',
  'GET': 'GET',
  'POST': 'POST'
})
.constant('CONFIG_KEYS', {
  'USERNAME': 'username',
  'PASSWORD': 'password',
  'SATELLITE_USER': 'satellite_user',
  'ENABLED': 'enabled'
})
.constant('TELEMETRY_API_KEYS', {
  'REMOTE_LEAF': 'REMOTE_LEAF'
})
.constant('CONFIG_URLS', {
  'GENERAL': '/insights/config/general',
  'SYSTEMS': '/insights/config/systems'
})
.constant('TELEMETRY_URLS', {
  'SYSTEMS_SUMMARY': '/insights/rs/telemetry/api/v1/systems?summary=true',
  'API_ROOT': '/rs/telemetry/api'
})
.constant('ADMIN_TABS', {
  'GENERAL': 'general',
  'SYSTEMS': 'systems'
})
.constant('ALERT_TYPES', {
  'DANGER': 'danger',
  'WARNING': 'warning',
  'INFO': 'info',
  'SUCCESS': 'success'
})
.constant('_', window._);