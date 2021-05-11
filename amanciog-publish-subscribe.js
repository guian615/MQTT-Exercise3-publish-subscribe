var client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')


var publishPayload = document.getElementById('pubPayload');
var publishBtn = document.getElementById('publishButton');
var pulishTopic = document.getElementById('pubTopic');
var subscribeTopic = document.getElementById("subscribeButton");
var topicToSub = document.getElementById("subscribeTopic");

client.on('connect', function () {
  console.log('connected');
  subscribeTopic.addEventListener('click', () => {
    client.subscribe(topicToSub.value, function (err) {
      if (!err) {
        client.publish(topicToSub.value, publishPayload.value);
        
        console.log("Topic already exist")
      } else {
        alert("Topic does not exist");
      }
    })
  })
})
var topicDiv=document.getElementById("pubTopic");
var messageDiv=document.getElementById("message");
client.on('message', function (topic, message) {
  console.log(topic.toString())
  console.log(message.toString())
  topicDiv.innerHTML+="<p>"+topic.toString()+"</p>";
  messageDiv.innerHTML+=message.toString()+"<br>";
  console.log(topic);
})


publishBtn.addEventListener('click', () => {
  console.log(pulishTopic.value);
  console.log(publishPayload);
  client.publish(pulishTopic.value, publishPayload.value);
  
})

$('#clear').click(function() {
  $('#Table tbody').fadeOut("slow")
})