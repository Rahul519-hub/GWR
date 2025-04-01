package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/ARM_Insurance/Arm_InsurancePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class Arm_InsurancePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Arm_Insurance :  Arm_Insurance) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.Arm_InsurancePopup, {Arm_Insurance}, 0)
  }
  
  static function push (Arm_Insurance :  Arm_Insurance) : pcf.api.Location {
    return __newDestinationForLocation(pcf.Arm_InsurancePopup, {Arm_Insurance}, 0).push()
  }
  
  
}