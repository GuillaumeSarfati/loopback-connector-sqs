var AWS = require('aws-sdk');
var assert = require('assert');

var sqs;

/**
 * Export the SqsConnector class.
 */

module.exports = SqsConnector;
/**
 * Create an instance of the connector with the given `settings`.
 */

function SqsConnector(settings) {

    assert(typeof settings === 'object', 'cannot initialize SqsConnector without a settings object');
    var connector = this;

    var accessKeyId = this.accessKeyId = settings.accessKeyId;
    var secretAccessKey = this.secretAccessKey = settings.secretAccessKey;
    var region = this.region = settings.region;
    // var platformApplicationArn = this.platformApplicationArn = settings.platformApplicationArn

    AWS.config.update({
        'accessKeyId': accessKeyId,
        'secretAccessKey': secretAccessKey,
        'region': region
    })
    Sqs.prototype = sqs = connector.sqs = new AWS.SQS()
}

SqsConnector.initialize = function (dataSource, callback) {
    dataSource.connector = new SqsConnector(dataSource.settings);
    callback();
}
SqsConnector.prototype.DataAccessObject = Sqs;


function Sqs() {

}

/**
 * Create a Sqs Arn Device Endpoint
 */

// Sqs.createEndpoint = function (options, fn) {
//     var dataSource = this.dataSource;
//     var settings = dataSource && dataSource.settings;
//     var connector = dataSource.connector;
//     assert(connector, 'Cannot use this module without a connector!');

//     sqs.createPlatformEndpoint({
//         'PlatformApplicationArn': settings.platformApplicationArn[options.platform],
//         'Token': options.token
//     }, function (err, data) {
//         fn(err, data);
//     });
// }

// Sqs.addPermission = function (params, fn) {sqs.addPermission(params, fn)}
// Sqs.confirmSubscription = function (params, fn) {sqs.confirmSubscription(params, fn)}
// Sqs.createPlatformApplication = function (params, fn) {sqs.createPlatformApplication(params, fn)}
// Sqs.createPlatformEndpoint = function (params, fn) {sqs.createPlatformEndpoint(params, fn)}
Sqs.createQueue = function (params, fn) {sqs.createQueue(params, fn)}
Sqs.sendMessage = function (params, fn) {sqs.sendMessage(params, fn)}
Sqs.purgeQueue = function (params, fn) {sqs.purgeQueue(params, fn)}
Sqs.getQueueUrl = function (params, fn) {sqs.getQueueUrl(params, fn)}
Sqs.receiveMessage = function (params, fn) {sqs.receiveMessage(params, fn)}
// Sqs.deleteEndpoint = function (params, fn) {sqs.deleteEndpoint(params, fn)}
// Sqs.deletePlatformApplication = function (params, fn) {sqs.deletePlatformApplication(params, fn)}
// Sqs.deleteTopic = function (params, fn) {sqs.deleteTopic(params, fn)}
// Sqs.getEndpointAttributes = function (params, fn) {sqs.getEndpointAttributes(params, fn)}
// Sqs.getPlatformApplicationAttributes = function (params, fn) {sqs.getPlatformApplicationAttributes(params, fn)}
// Sqs.getSubscriptionAttributes = function (params, fn) {sqs.getSubscriptionAttributes(params, fn)}
// Sqs.getTopicAttributes = function (params, fn) {sqs.getTopicAttributes(params, fn)}
// Sqs.listEndpointsByPlatformApplication = function (params, fn) {sqs.listEndpointsByPlatformApplication(params, fn)}
// Sqs.listPlatformApplications = function (params, fn) {sqs.listPlatformApplications(params, fn)}
// Sqs.listSubscriptions = function (params, fn) {sqs.listSubscriptions(params, fn)}
// Sqs.listSubscriptionsByTopic = function (params, fn) {sqs.listSubscriptionsByTopic(params, fn)}
// Sqs.listTopics = function (params, fn) {sqs.listTopics(params, fn)}
// Sqs.publish = function (params, fn) {sqs.publish(params, fn)}
// Sqs.removePermission = function (params, fn) {sqs.removePermission(params, fn)}
// Sqs.setEndpointAttributes = function (params, fn) {sqs.setEndpointAttributes(params, fn)}
// Sqs.setPlatformApplicationAttributes = function (params, fn) {sqs.setPlatformApplicationAttributes(params, fn)}
// Sqs.setSubscriptionAttributes = function (params, fn) {sqs.setSubscriptionAttributes(params, fn)}
// Sqs.setTopicAttributes = function (params, fn) {sqs.setTopicAttributes(params, fn)}
// Sqs.subscribe = function (params, fn) {sqs.subscribe(params, fn)}
// Sqs.unsubscribe = function (params, fn) {sqs.unsubscribe(params, fn)}

/**
 * Initialize the connector for the given data source
 * @param {DataSource} dataSource The data source instance
 * @param {Function} [callback] The callback function
 */
exports.initialize = function (dataSource, callback) {
    console.log("Hi");
};

/**
 * Send using `modelInstance.send()`.
 */

// Sqs.prototype.createEndpoint = function (fn) {this.constructor.createEndpoint(this, fn);}

// Sqs.prototype.addPermission = function (fn) { this.constructor.addPermission(this, fn);}
// Sqs.prototype.confirmSubscription = function (fn) { this.constructor.confirmSubscription(this, fn);}
// Sqs.prototype.createPlatformApplication = function (fn) { this.constructor.createPlatformApplication(this, fn);}
// Sqs.prototype.createPlatformEndpoint = function (fn) { this.constructor.createPlatformEndpoint(this, fn);}
Sqs.prototype.createQueue = function (fn) { this.constructor.createQueue(this, fn);}
Sqs.prototype.sendMessage = function (fn) { this.constructor.sendMessage(this, fn);}
Sqs.prototype.purgeQueue = function (fn) { this.constructor.purgeQueue(this, fn);}
Sqs.prototype.getQueueUrl = function (fn) { this.constructor.getQueueUrl(this, fn);}
Sqs.prototype.receiveMessage = function (fn) { this.constructor.receiveMessage(this, fn);}
// Sqs.prototype.deleteEndpoint = function (fn) { this.constructor.deleteEndpoint(this, fn);}
// Sqs.prototype.deletePlatformApplication = function (fn) { this.constructor.deletePlatformApplication(this, fn);}
// Sqs.prototype.deleteTopic = function (fn) { this.constructor.deleteTopic(this, fn);}
// Sqs.prototype.getEndpointAttributes = function (fn) { this.constructor.getEndpointAttributes(this, fn);}
// Sqs.prototype.getPlatformApplicationAttributes = function (fn) { this.constructor.getPlatformApplicationAttributes(this, fn);}
// Sqs.prototype.getSubscriptionAttributes = function (fn) { this.constructor.getSubscriptionAttributes(this, fn);}
// Sqs.prototype.getTopicAttributes = function (fn) { this.constructor.getTopicAttributes(this, fn);}
// Sqs.prototype.listEndpointsByPlatformApplication = function (fn) { this.constructor.listEndpointsByPlatformApplication(this, fn);}
// Sqs.prototype.listPlatformApplications = function (fn) { this.constructor.listPlatformApplications(this, fn);}
// Sqs.prototype.listSubscriptions = function (fn) { this.constructor.listSubscriptions(this, fn);}
// Sqs.prototype.listSubscriptionsByTopic = function (fn) { this.constructor.listSubscriptionsByTopic(this, fn);}
// Sqs.prototype.listTopics = function (fn) { this.constructor.listTopics(this, fn);}
// Sqs.prototype.publish = function (fn) { this.constructor.publish(this, fn);}
// Sqs.prototype.removePermission = function (fn) { this.constructor.removePermission(this, fn);}
// Sqs.prototype.setEndpointAttributes = function (fn) { this.constructor.setEndpointAttributes(this, fn);}
// Sqs.prototype.setPlatformApplicationAttributes = function (fn) { this.constructor.setPlatformApplicationAttributes(this, fn);}
// Sqs.prototype.setSubscriptionAttributes = function (fn) { this.constructor.setSubscriptionAttributes(this, fn);}
// Sqs.prototype.setTopicAttributes = function (fn) { this.constructor.setTopicAttributes(this, fn);}
// Sqs.prototype.subscribe = function (fn) { this.constructor.subscribe(this, fn);}
// Sqs.prototype.unsubscribe = function (fn) { this.constructor.unsubscribe(this, fn);}
