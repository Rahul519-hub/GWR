package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Arm_Insurance.eti;Arm_Insurance.eix;Arm_Insurance.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface Arm_InsuranceInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the Arm_InsurancePlans array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToArm_InsurancePlans(entity.Arm_InsurancePlans element);
  
  
  /**
   * Gets the value of the Age field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getAge();
  
  
  /**
   * Gets the value of the Arm_InsurancePlans field.
   * Insurance plans 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Arm_InsurancePlans[] getArm_InsurancePlans();
  
  
  /**
   * Gets the value of the CarModel field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Arm_InsuranceCar_Model getCarModel();
  
  
  /**
   * Gets the value of the CarName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Arm_Insurance_Carname getCarName();
  
  
  /**
   * Gets the value of the Country field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Country getCountry();
  
  
  /**
   * Gets the value of the DOB field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDOB();
  
  
  /**
   * Gets the value of the Email field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEmail();
  
  
  /**
   * Gets the value of the FirstName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstName();
  
  
  /**
   * Gets the value of the Gender field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GenderType getGender();
  
  
  /**
   * Gets the value of the LastName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastName();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the PassPortNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPassPortNumber();
  
  
  /**
   * Gets the value of the Phone field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PhoneCountryCode getPhone();
  
  
  /**
   * Gets the value of the SSN field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSSN();
  
  
  /**
   * Gets the value of the UserName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUserName();
  
  
  /**
   * Gets the value of the UserValue field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUserValue();
  
  
  /**
   * Gets the value of the AssignedRisk field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAssignedRisk();
  
  
  /**
   * Gets the value of the Bit field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBit();
  
  
  /**
   * Removes the given element from the Arm_InsurancePlans array. This is achieved by marking the element for removal.
   */
  public void removeFromArm_InsurancePlans(entity.Arm_InsurancePlans element);
  
  
  /**
   * Removes the given element from the Arm_InsurancePlans array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromArm_InsurancePlans(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Age field.
   */
  public void setAge(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Arm_InsurancePlans field.
   */
  public void setArm_InsurancePlans(entity.Arm_InsurancePlans[] value);
  
  
  /**
   * Sets the value of the AssignedRisk field.
   */
  public void setAssignedRisk(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Bit field.
   */
  public void setBit(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the CarModel field.
   */
  public void setCarModel(typekey.Arm_InsuranceCar_Model value);
  
  
  /**
   * Sets the value of the CarName field.
   */
  public void setCarName(typekey.Arm_Insurance_Carname value);
  
  
  /**
   * Sets the value of the Country field.
   */
  public void setCountry(typekey.Country value);
  
  
  /**
   * Sets the value of the DOB field.
   */
  public void setDOB(java.util.Date value);
  
  
  /**
   * Sets the value of the Email field.
   */
  public void setEmail(java.lang.String value);
  
  
  /**
   * Sets the value of the FirstName field.
   */
  public void setFirstName(java.lang.String value);
  
  
  /**
   * Sets the value of the Gender field.
   */
  public void setGender(typekey.GenderType value);
  
  
  /**
   * Sets the value of the LastName field.
   */
  public void setLastName(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the PassPortNumber field.
   */
  public void setPassPortNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the Phone field.
   */
  public void setPhone(typekey.PhoneCountryCode value);
  
  
  /**
   * Sets the value of the SSN field.
   */
  public void setSSN(java.lang.String value);
  
  
  /**
   * Sets the value of the UserName field.
   */
  public void setUserName(java.lang.String value);
  
  
  /**
   * Sets the value of the UserValue field.
   */
  public void setUserValue(java.lang.String value);
  
  
  
}