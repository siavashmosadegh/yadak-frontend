class FormHandlers {
  onChange = (e, formik, callBack) => {
    let value = e.target.value;
    let name = e.target.name;
    formik.setFieldValue(e.target.name, e.target.value);
    callBack && callBack(e, name, value);
  };
  onSelect = (selected, name, formik, callBack) => {
    let value = selected.id;
    if (name === 'tags') {
      value = selected.map((each) => each.id).join();
    }
    formik.setFieldValue(name, value);
    callBack && callBack(selected, name);
  };
  onDeSelect = (option, name, formik) => {
    let value = formik.values[name].split(',');
    let optionIndex = value.findIndex((each) => each === option.id.toString());
    value.splice(optionIndex, 1);
    value = value.join('');
    formik.setFieldValue(name, value);
  };
  onClear = (name, formik, callBack) => {
    formik.setFieldTouched(name);
    formik.setFieldTouched(name);
    if (name === 'tags') {
      formik.setFieldValue(name, '');
    } else {
      formik.setFieldValue(name, null);
    }
    callBack && callBack();
  };
  onBlur = (e, formik) => {
    let name = e.target.name;
    formik.setFieldTouched(name);
  };
  onPress = (name, formik) => {
    formik.setFieldTouched(name);
  };
}
export default new FormHandlers();
