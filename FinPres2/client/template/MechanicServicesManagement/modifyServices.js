Template.modifyServices.onRendered(function(){
   const Desciption = this.find('#Description').value;
   const Cost = this.find('#Cost').value;
 });


Template.modifyServices.helpers({
  Services() {
    return Services.find({"typeUser": {$regex: ".*" + UserG + ".*"}}).fetch();
  },
  Description() {
    return this.document.getElementsByTagName("Description").value;
  },
});

Template.modifyServices.events({
  'submit form':function (event) {
    // Prevent default browser form submit
    event.preventDefault();
    var description=event.target.Description.value;
    var cost=event.target.Cost.value;
    Services.update({_id:this._id},{$set:{description: description,cost: cost}});
    event.target.Description.value = '';
    event.target.Cost.value = '';
  },
});
