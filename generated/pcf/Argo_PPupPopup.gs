package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_PPupPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class Argo_PPupPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Argo_Insurance :  Argo_Insurance) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.Argo_PPupPopup, {Argo_Insurance}, 0)
  }
  
  static function push (Argo_Insurance :  Argo_Insurance) : pcf.api.Location {
    return __newDestinationForLocation(pcf.Argo_PPupPopup, {Argo_Insurance}, 0).push()
  }
  
  
}