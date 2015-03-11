define(['react', 'ui/page/page', 'ui/base-components/search-field/search-field',
        'ui/base-components/panel/panel', 'ui/base-components/input/input',
        'ui/base-components/tab-panel/tab-panel', 'ui/base-components/tab-panel/tab',
        'ui/base-components/checkbox/checkbox', 'ui/base-components/editable-label/editable-label',
        'ui/base-components/list/list', 'ui/base-components/search-list/search-list', 'ui/base-components/contact-input/contact-input', 'ui/base-components/textarea/textarea',
        'ui/base-components/breadcrumb/breadcrumb', 'ui/base-components/datepicker/datepicker',
        'ui/base-components/dropzone/dropzone'],
  function(React, Page, SearchField, Panel, Input, TabPanel, Tab, CheckBox, EditableLabel,  List, SearchList, ContactInput, TextArea, BreadCrumb, DatePicker, Dropzone){
  return function () {
    var onSubmit = function(q){
      console.log(q);
    };
    var onChange = function(q){
      console.log(q);
    };
    var onReset = function(q){
      console.log('Query was reset');
    };

    var onLISelect = function(q){

    };

    var options = {
      'no': 'Нет',
      'hot': 'Горячая',
      'cold': 'Холодная',
      'boiler': 'Установлен нагреватель'
    };

    var links = [{href: '/#/', title:'Главная'}, {href: '/#/admin', title:'Админка'}, {href: '/#/devpage', title: 'Devpage'}];

    var onListSelect = function (key){
      if(!key){
        console.log('Nothing was selected');
      }
      console.log(options[key]+' was selected!');
    };

    React.render(
      <Page>
        <div className="row">
          <TabPanel size='12'>
            <Tab name="Editable Label" counter={1}>
              <EditableLabel size="4" onSave={onSubmit} value="Редактирование по DoubleClick"/>
              <EditableLabel size="4" onSave={onSubmit} value="defaultEditMode = true" defaultEditMode={true}/>
            </Tab>
            <Tab name="Search Field">
              <SearchField onSubmit={onSubmit} onChange={onChange} onReset={onReset} size='4'/>
            </Tab>
            <Tab name="Test Form">
              <Panel label='Test form' size='12'>
                <Input label='labelName' placeholder='examplePlaceholder' size='12' valueType='float' />
                <CheckBox label='checkbox 1' onChange={onChange} />
                <CheckBox label='checkbox 2' onChange={onChange} />
                <CheckBox label='checkbox 3' onChange={onChange} />
              </Panel>
            </Tab>
            <Tab name="Dropdown List">
              <List onChange={onListSelect} label='Вода' options={options}/>
            </Tab>
            <Tab name="Inputs" active={true}>
              <ContactInput label='EmailInput' contactType='email' placeholder='mail@mail.com' size='12'/>
              <ContactInput label='PhoneInput' contactType='phone' placeholder='+7(666)33-33-33' size='12'/>
              <DatePicker label="Дата" size="12"/>
              <TextArea label='Textarea' size='12'/>
              <Dropzone label="Drop file here" size="12" />
            </Tab>
            <Tab name="Bread Crumb">
              <BreadCrumb links={links} />
            </Tab>
          </TabPanel>
        </div>
        <div id="devpage-test"></div>
      </Page>,
      document.body);
  };
});
