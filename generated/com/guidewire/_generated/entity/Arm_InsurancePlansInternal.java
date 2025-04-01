package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Arm_InsurancePlans.eti;Arm_InsurancePlans.eix;Arm_InsurancePlans.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface Arm_InsurancePlansInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the Arm_Insurance field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Arm_Insurance getArm_Insurance();
  
  
  public gw.pl.persistence.core.Key getArm_InsuranceID();
  
  
  /**
   * Gets the value of the CarVinNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCarVinNumber();
  
  
  /**
   * Gets the value of the Carpurchasedate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCarpurchasedate();
  
  
  /**
   * Gets the value of the DiamondPlan field.
   * its offers users addtional coverage and 10% Discount on Annual Package
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDiamondPlan();
  
  
  /**
   * Gets the value of the ExecutivePlan field.
   * Its a very limited coverages when compare to regular
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExecutivePlan();
  
  
  /**
   * Gets the value of the GoldPlan field.
   * it offers user to get 20% discount by subscribing package  
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getGoldPlan();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the PlatinumPlan field.
   * It Offers Multiple Coverages And 25% Discount for Old Customers 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPlatinumPlan();
  
  
  /**
   * Gets the value of the RegularPlan field.
   * Its a regular plans no additional coverages
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRegularPlan();
  
  
  /**
   * Gets the value of the SilverPlan field.
   * it offers all basic coverages with limited  funcationality
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSilverPlan();
  
  
  /**
   * Gets the value of the UserAddress field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUserAddress();
  
  
  /**
   * Sets the value of the Arm_Insurance field.
   */
  public void setArm_Insurance(entity.Arm_Insurance value);
  
  
  public void setArm_InsuranceID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CarVinNumber field.
   */
  public void setCarVinNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the Carpurchasedate field.
   */
  public void setCarpurchasedate(java.lang.String value);
  
  
  /**
   * Sets the value of the DiamondPlan field.
   */
  public void setDiamondPlan(java.lang.String value);
  
  
  /**
   * Sets the value of the ExecutivePlan field.
   */
  public void setExecutivePlan(java.lang.String value);
  
  
  /**
   * Sets the value of the GoldPlan field.
   */
  public void setGoldPlan(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the PlatinumPlan field.
   */
  public void setPlatinumPlan(java.lang.String value);
  
  
  /**
   * Sets the value of the RegularPlan field.
   */
  public void setRegularPlan(java.lang.String value);
  
  
  /**
   * Sets the value of the SilverPlan field.
   */
  public void setSilverPlan(java.lang.String value);
  
  
  /**
   * Sets the value of the UserAddress field.
   */
  public void setUserAddress(java.lang.String value);
  
  
  
}