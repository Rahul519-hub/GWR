package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Argo_DiverValues.eti;Argo_DiverValues.eix;Argo_DiverValues.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface Argo_DiverValuesVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.Argo_DiverValues AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.Argo_DiverValues> getAllVersions();
  
  
  
}