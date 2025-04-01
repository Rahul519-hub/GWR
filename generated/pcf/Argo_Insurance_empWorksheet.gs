package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_Insurance_empWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class Argo_Insurance_empWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Argo_Insurance :  Argo_Insurance) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.Argo_Insurance_empWorksheet, {Argo_Insurance}, 0)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (Argo_Insurance :  Argo_Insurance) : pcf.api.Location {
    return __newDestinationForLocation(pcf.Argo_Insurance_empWorksheet, {Argo_Insurance}, 0).goInWorkspace()
  }
  
  static function push (Argo_Insurance :  Argo_Insurance) : pcf.api.Location {
    return __newDestinationForLocation(pcf.Argo_Insurance_empWorksheet, {Argo_Insurance}, 0).push()
  }
  
  
}