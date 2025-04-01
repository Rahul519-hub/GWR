package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_PPupPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class Argo_PPupPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (policyperiod :  PolicyPeriod) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.Argo_PPupPopup, {policyperiod}, 0)
  }
  
  static function push (policyperiod :  PolicyPeriod) : pcf.api.Location {
    return __newDestinationForLocation(pcf.Argo_PPupPopup, {policyperiod}, 0).push()
  }
  
  
}