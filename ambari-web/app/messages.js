/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Em.I18n.translations = {

  'app.name':'Ambari',
  'app.reloadPopup.link': 'Reload Page',
  'app.reloadPopup.text': 'Trying to connect to server...',
  'app.reloadPopup.header': 'Reload Page',

  'app.loadingPlaceholder': 'Loading...',
  'app.sighout':'Sign out',

  'apply':'apply',
  'and':'and',
  'none':'none',
  'all':'all',
  'minimum':'minimum',
  'from':'From',
  'to':'To',

  'common.learnMore':'Learn more',
  'common.back':'Back',
  'common.prev':'Prev',
  'common.next':'Next',
  'common.host':'Host',
  'common.group':'Group',
  'common.progress':'Progress',
  'common.status':'Status',
  'common.action':'Action',
  'common.remove':'Remove',
  'common.retry':'Retry',
  'common.show':'Show',
  'common.hide':'Hide',
  'common.cancel':'Cancel',
  'common.apply':'Apply',
  'common.service': 'Service',
  'common.version':'Version',
  'common.description':'Description',
  'common.client':'Client',
  'common.regionServer':'RegionServer',
  'common.taskTracker':'TaskTracker',
  'common.dataNode':'DataNode',
  'common.print':'Print',
  'common.deploy':'Deploy',
  'common.message':'Message',
  'common.tasks':'Tasks',
  'common.open':'Open',
  'common.copy':'Copy',
  'common.complete':'Complete',
  'common.metrics':'Metrics',
  'common.timeRange':'Time Range',
  'common.name':'Name',
  'common.ipAddress':'IP Address',
  'common.cpu':'CPU',
  'common.ram':'RAM',
  'common.diskUsage':'Disk Usage',
  'common.loadAvg':'Load Avg',
  'common.components':'Components',
  'common.quickLinks':'Quick Links',
  'common.save':'Save',
  'common.servers':'Servers',
  'common.clients':'Clients',

  'popup.highlight':'click to highlight',

  'login.header':'Sign in',
  'login.username':'Username',
  'login.password':'Password',
  'login.loginButton':'Sign in',
  'login.error':'Invalid username/password combination.',
  
  'graphs.noData.title': 'No Data',
  'graphs.noData.message': 'There was no data available. Possible reasons include inaccessible Ganglia service.',
  'graphs.error.title': 'Error',
  'graphs.error.message': 'There was a problem getting data for the chart ({0}: {1})',

  'users.userName.validationFail': 'Value should contains only letters and digits and start with letter',

  'services.nagios.description':'Nagios Monitoring and Alerting system',
  'services.ganglia.description':'Ganglia Metrics Collection system',
  'services.hdfs.description':'Apache Hadoop Distributed File System',
  'services.mapreduce.description':'Apache Hadoop Distributed Processing Framework',
  'services.sqoop.description':'Tool for transferring bulk data between Apache Hadoop and structured data stores such as relational databases',
  'services.pig.description':'Scripting platform for analyzing large datasets',
  'services.hive.description':'Data warehouse system for ad-hoc queries & analysis of large datasets and table & storage management service',
  'services.oozie.description':'System for workflow coordination and execution of Apache Hadoop jobs',
  'services.zookeeper.description':'ZooKeeper desc',
  'services.hbase.description':'Non-relational distributed database and centralized service for configuration management & synchronization',
  'services.hive.databaseComponent':'Database Server',
  
  'services.alerts.OK.timePrefix': 'OK for ',
  'services.alerts.WARN.timePrefix': 'WARN for ',
  'services.alerts.CRIT.timePrefix': 'CRIT for ',
  'services.alerts.headingOfList': 'Alerts and Health Checks',
  'services.alerts.goToService': 'Go to Service',
  'services.alerts.goToNagios': 'Go to Nagios Web UI',

  'topnav.logo.href':'http://incubator.apache.org/ambari/',
  'topnav.help.href':'https://cwiki.apache.org/confluence/display/AMBARI/Ambari',

  'installer.header':'Cluster Install Wizard',
  'installer.navigation.warning.header':'Navigation Warning',

  'installer.mockData':'mockData',
  'installer.pollData':'pollData',
  'installer.noHostsAssigned':'No host assigned',
  'installer.slaveComponentHosts.selectHosts':'select hosts for this group',
  'installer.slaveComponentHostsPopup.header':'Select which hosts should belong to which {0} group',

  'installer.controls.serviceConfigPopover.title':'{0}<br><small>{1}</small>',
  'installer.controls.serviceConfigMultipleHosts.other':'1 other',
  'installer.controls.serviceConfigMultipleHosts.others':'{0} others',
  'installer.controls.serviceConfigMasterHosts.header':'{0} Hosts',
  'installer.controls.addSlaveComponentGroupButton.title':'Add a {0} Group',
  'installer.controls.addSlaveComponentGroupButton.content':'If you need different settings on certain {0}s, you can add a {1} group.<br>All {2}s within the same group will have the same set of settings.  You can create multiple groups.',
  'installer.controls.slaveComponentChangeGroupName.error':'group with this name already exist',

  'installer.step1.header':'Welcome',
  'installer.step1.body.header':'Welcome to Apache Ambari!',
  'installer.step1.body':'Ambari makes it easy to install, manage, and monitor Hadoop clusters.<br>' +
    'We will walk you through the cluster installation process with this step-by-step wizard.',
  'installer.step1.clusterName':'Name your cluster',
  'installer.step1.clusterName.tooltip.title':'Cluster Name',
  'installer.step1.clusterName.tooltip.content':'Enter a unique cluster name. Cluster name cannot be changed later.',
  'installer.step1.clusterName.error.required':'Cluster Name is required',
  'installer.step1.clusterName.error.whitespaces':'Cluster Name cannot contain white spaces',
  'installer.step1.clusterName.error.specialChar':'Cluster Name cannot contain special characters',

  'installer.step2.header':'Install Options',
  'installer.step2.body':'Enter the list of hosts to be included in the cluster and provide your SSH key.',
  'installer.step2.targetHosts':'Target Hosts',
  'installer.step2.targetHosts.info':'Enter a list of host names, one per line',
  'installer.step2.hostPattern.tooltip.title':'Pattern Expressions',
  'installer.step2.hostPattern.tooltip.content':'You can use pattern expressions to specify a number of target hosts. For example, to specify host01.domain thru host10.domain, enter host[01-10].domain in the target hosts textarea.',
  'installer.step2.hostName.error.required':'You must specify at least one host name',
  'installer.step2.hostName.error.already_installed':'All these hosts are already part of the cluster',
  'installer.step2.hostName.error.notRequired':'Host Names will be ignored if not using SSH to automatically configure hosts',
  'installer.step2.hostName.error.invalid':'Invalid Host Name(s)',
  'installer.step2.hostName.pattern.header':'Host name pattern expressions',
  'installer.step2.sshKey':'Host Registration Information',
  'installer.step2.sshKey.error.required':'SSH Private Key is required',
  'installer.step2.passphrase.error.match':'Passphrases do not match',
  'installer.step2.manualInstall.label':'Do not use SSH to automatically configure hosts ',
  'installer.step2.manualInstall.info':'By not using SSH to connect to the target hosts, you must manually install the ' +
    'Ambari Agent on each host in order for the wizard to perform the necessary configurations and software installs.',
  'installer.step2.advancedOption':'Advanced Options',
  'installer.step2.repoConf':'Software Repository Configuration File Path',
  'installer.step2.advancedOptions.header':'Advanced Options',
  'installer.step2.localRepo.label_use':'Use a',
  'installer.step2.localRepo.label_instead':'instead of downloading software packages from the Internet',
  'installer.step2.localRepo.error.required':'Local repository file path is required',
  'installer.step2.localRepo.tooltip.title':'Local Software Repository',
  'installer.step2.localRepo.tooltip.content': 'The cluster install requires access to the Internet to fetch software ' +
    'from a remote repository. In some cases, adequate bandwidth is not available and you want to prevent downloading ' +
    'packages from the remote repository over and over again. Other times, Internet access is not available from the ' +
    'hosts in your cluster. In these situations, you must set up a version of the repository that your machines can ' +
    'access locally and this is called a <b>Local Software Repository</b>',
  'installer.step2.javaHome.label' : 'Path to 64-bit JDK',
  'installer.step2.javaHome.tooltip.title' : 'JAVA_HOME',
  'installer.step2.javaHome.tooltip.content' : 'Path to 64-bit JAVA_HOME. /usr/jdk/jdk1.6.0_31 is the default used by Ambari. You can override this to a specific path that contains the JDK. <br/> Note: the path must be valid on <b>ALL</b> hosts in your cluster.',
  'installer.step2.useSsh.provide' : 'Provide your',
  'installer.step2.useSsh.provide_id_rsa' : '(id_rsa for root) and use SSH to automatically register hosts',
  'installer.step2.useSsh.tooltip.title':'SSH Private Key',
  'installer.step2.useSsh.tooltip.content':'The <b>SSH Private Key File</b> is used for the root access to the target hosts in your cluster.',
  'installer.step2.manualInstall.perform':'Perform',
  'installer.step2.manualInstall.perform_on_hosts':'on hosts and do not use SSH',
  'installer.step2.manualInstall.tooltip.title':'manual registration',
  'installer.step2.manualInstall.tooltip.content':'Manually registering the Ambari Agent on each host eliminates the need for SSH and should be performed prior to continuing cluster installation.',
  'installer.step2.manualInstall.popup.header':'Before You Proceed',
  'installer.step2.manualInstall.popup.body':'You must install Ambari Agents on each host you want to manage before you proceed.',
  'installer.step2.orUse':'Or use',
  'installer.step2.registerAndConfirm':'Register and Confirm',

  'installer.step3.header':'Confirm Hosts',
  'installer.step3.body':'Registering your hosts.<br>' +
    'Please confirm the host list and remove any hosts that you do not want to include in the cluster.',
  'installer.step3.hostLog.popup.header':'Registration log for {0}',
  'installer.step3.hosts.remove.popup.header':'Remove Hosts',
  'installer.step3.hosts.remove.popup.body':'Are you sure you want to remove the selected host(s)?',
  'installer.step3.hosts.retry.popup.header':'Retry Host Discovery',
  'installer.step3.hosts.retry.popup.body':'Are you sure you want to retry discovery of the selected host(s)?',
  'installer.step3.hostInformation.popup.header':'Error in retrieving host Information',
  'installer.step3.hostInformation.popup.body' : 'All bootstrapped hosts registered but unable to retrieve cpu and memory related information',
  'installer.step3.hostWarningsPopup.details':'Show Details',
  'installer.step3.hostWarningsPopup.directoriesAndFiles':'DIRECTORIES & FILES',
  'installer.step3.hostWarningsPopup.packages':'PACKAGES',
  'installer.step3.hostWarningsPopup.processes':'PROCESSES',
  'installer.step3.hostWarningsPopup.noProcesses':'No processes to display',
  'installer.step3.hosts.noHosts':'No hosts to display',
  'installer.step3.warnings.popup.header':'Host Checks',
  'installer.step3.warnings.description':'Some warnings were encountered while performing checks against the above hosts.',
  'installer.step3.warnings.linkText':'Click here to see the warnings.',
  'installer.step3.noWarnings.linkText':'Click here to see the check results.',
  'installer.step3.warnings.noWarnings':'All host checks were successful.',
  'installer.step3.warnings.updateChecks.success':'Host Checks successfully updated',
  'installer.step3.warnings.updateChecks.failed':'Host Checks update failed',
  'installer.step3.removeSelected':'Remove Selected',
  'installer.step3.retryFailed':'Retry Failed',

  'installer.step4.header':'Choose Services',
  'installer.step4.body':'Choose which services you want to install on your cluster.',
  'installer.step4.mapreduceCheck.popup.header':'MapReduce Needed',
  'installer.step4.mapreduceCheck.popup.body':'You did not select MapReduce, but it is needed by other services you selected.  We will automatically add MapReduce.  Is this OK?',
  'installer.step4.monitoringCheck.popup.header':'Limited Functionality Warning',
  'installer.step4.monitoringCheck.popup.body':'You did not select Nagios and/or Ganglia.  If both are not selected, monitoring and alerts will not function properly.  Is this OK?',

  'installer.step5.header':'Assign Masters',
  'installer.step5.attention':' hosts not running master services',
  'installer.step5.body':'Assign master components to hosts you want to run them on.',
  'installer.step5.body.hive':'<i class="icon-asterisks">&#10037</i> HiveServer2, Hive Metastore, and WebHCat Server will be co-hosted on the same server.',

  'installer.step6.header':'Assign Slaves and Clients',
  'installer.step6.body':'Assign slave and client components to hosts you want to run them on.<br/>Hosts that are assigned master components are shown with <i class=icon-asterisks>&#10037</i>. <br/>&quot;Client&quot; will install ',
  'installer.step6.error.mustSelectOne':'You must assign at least one host to each.',
  'installer.step6.error.mustSelectOneForHost':'You must assign at least one slave/client component to each.',
  'installer.step6.wizardStep6Host.title':'master components hosted on {0}',

  'installer.step7.header':'Customize Services',
  'installer.step7.body':'We have come up with recommended configurations for the services you selected.  Customize them as you see fit.',
  'installer.step7.attentionNeeded':'<strong>Attention:</strong> Some configurations need your attention before you can proceed.',

  'installer.step8.header':'Review',
  'installer.step8.body':'Please review the configuration before installation',

  'installer.step9.header':'Install, Start and Test',
  'installer.step9.body':'Please wait while the selected services are installed and started.',
  'installer.step9.status.success':'Successfully installed and started the services.',
  'installer.step9.status.warning':'Installed and started the services with some warnings.',
  'installer.step9.status.failed':'Failed to install/start the services.',
  'installer.step9.host.status.success':'Success',
  'installer.step9.host.status.warning':'Warnings encountered',
  'installer.step9.host.status.failed':'Failures encountered',
  'installer.step9.host.status.nothingToInstall':'Waiting (Nothing to install)',
  'installer.step9.hostLog.popup.header':'Tasks. executed on ',
  'installer.step9.hostLog.popup.categories.all':'All',
  'installer.step9.hostLog.popup.categories.pending':'Queued / Pending',
  'installer.step9.hostLog.popup.categories.in_progress':'In Progress',
  'installer.step9.hostLog.popup.categories.failed':'Failed',
  'installer.step9.hostLog.popup.categories.completed':'Success',
  'installer.step9.hostLog.popup.categories.aborted':'Cancelled',
  'installer.step9.hostLog.popup.categories.timedout':'Timed Out',
  'installer.step9.hostLog.popup.noTasksToShow':'No tasks to show',
  'installer.step9.overallProgress':'{0} % overall',

  'installer.step10.header':'Summary',
  'installer.step10.body':'Here is the summary of the install process.',
  'installer.step10.nagiosRestartRequired':'<b>Important!</b> Restarting Nagios service is required for the alerts and notifications to work properly.  After clicking on the Complete button to dismiss this wizard, go to Services -> Nagios to restart the Nagios service.',

  'form.create':'Create',
  'form.save':'Save',
  'form.cancel':'Cancel',
  'form.password':'Password',
  'form.passwordRetype':'Retype Password',
  'form.saveSuccess':'Successfully saved.',
  'form.saveError':'Sorry, errors occurred.',

  'form.validator.invalidIp':'Please enter valid ip address',

  'admin.advanced.title':'Advanced',
  'admin.advanced.caution':'This section is for advanced user only.<br/>Proceed with caution.',
  'admin.advanced.button.uninstallIncludingData':'Uninstall cluster including all data.',
  'admin.advanced.button.uninstallKeepData':'Uninstall cluster but keep data.',

  'admin.advanced.popup.header':'Uninstall Cluster',

  /*'admin.advanced.popup.text':'Uninstall Cluster',*/

  'admin.audit.grid.date':"Date/Time",
  'admin.audit.grid.category':"Category",
  'admin.audit.grid.operationName':"Operation",
  'admin.audit.grid.performedBy':"Performed By",
  'admin.audit.grid.service':"Category",

  'admin.authentication.form.method.database':'Use Ambari Database to authenticate users',
  'admin.authentication.form.method.ldap':'Use LDAP/Active Directory to authenticate',
  'admin.authentication.form.primaryServer':'Primary Server',
  'admin.authentication.form.secondaryServer':'Secondary Server',
  'admin.authentication.form.useSsl':'Use SSL',
  'admin.authentication.form.bind.anonymously':"Bind Anonymously",
  'admin.authentication.form.bind.useCrenedtials':"Use Credentials To Bind",
  'admin.authentication.form.bindUserDN':'Bind User DN',
  'admin.authentication.form.searchBaseDN':'Search Base DN',
  'admin.authentication.form.usernameAttribute':'Username Attribute',

  'admin.authentication.form.userDN':'User DN',
  'admin.authentication.form.password':'Password',
  'admin.authentication.form.configurationTest':'Configuration Test',
  'admin.authentication.form.testConfiguration':'Test Configuration',

  'admin.authentication.form.test.success':'The configuration passes the test',
  'admin.authentication.form.test.fail':'The configuration fails the test',

  'admin.security.title':'Kerberos Security has not been enabled on this cluster.',
  'admin.security.button.enable':'Enable Kerberos Security on this cluster',

  'admin.users.ldapAuthentionUsed':'LDAP Authentication is being used to authenticate users',
  'admin.users.delete.yourself.message':'You can\'t delete yourself',
  'admin.users.delete.yourself.header':'Deleting warning',

  'admin.users.delete.header':'Delete {0}',

  'admin.users.addButton':'Add Local User',
  'admin.users.editButton': 'Edit Local User',
  'admin.users.delete':'delete',
  'admin.users.edit':'edit',
  'admin.users.privileges':'Admin',
  'admin.users.type':'Type',
  'admin.users.action':'Action',
  'admin.users.password':'Password',
  'admin.users.passwordRetype':'Retype Password',
  'admin.users.username':'Username',
  'admin.users.createSuccess': 'User successfully created.',
  'admin.users.createError': 'Error occurred while user creating.',
  'admin.users.createError.passwordValidation': 'Passwords are different',
  'admin.users.createError.userNameExists': 'User with the same name is already exists',
  'admin.users.editError.requiredField': 'This is required',

  'question.sure':'Are you sure?',
  'yes':'Yes',
  'no':'No',

  'services.service.start':'Start',
  'services.service.stop':'Stop',
  'services.service.confirmation.header':'Confirmation',
  'services.service.confirmation.body':'Are you sure?',
  'services.service.summary.version':'Version',
  'services.service.summary.nameNode':'NameNode Web UI',
  'services.service.summary.nameNodeUptime':'NameNode Uptime',
  'services.service.summary.nameNodeHeap':'NameNode Heap',
  'services.service.summary.pendingUpgradeStatus':'Upgrade Status',
  'services.service.summary.pendingUpgradeStatus.pending':'Pending upgrade',
  'services.service.summary.pendingUpgradeStatus.notPending':'No pending upgrade',
  'services.service.summary.safeModeStatus':'Safe Mode Status',
  'services.service.summary.safeModeStatus.inSafeMode':'In safe mode',
  'services.service.summary.safeModeStatus.notInSafeMode':'Not in safe mode',
  'services.service.summary.dataNodes':'DataNodes',
  'services.service.summary.diskCapacity':'HDFS Disk Capacity',
  'services.service.summary.blocksTotal':'Blocks (total)',
  'services.service.summary.blockErrors':'Block Errors',
  'services.service.summary.totalFiles':'Total Files + Dirs',
  'services.service.summary.jobTracker':'JobTracker',
  'services.service.summary.jobTrackerWebUI':'JobTracker Web UI',
  'services.service.summary.jobTrackerUptime':'JobTracker Uptime',
  'services.service.summary.trackersLiveTotal':'Trackers',
  'services.service.summary.trackersBlacklistGraylist':'Trackers',
  'services.service.summary.jobTrackerHeap':'JobTracker Heap',
  'services.service.summary.totalSlotsCapacity':'Total Slots Capacity',
  'services.service.summary.totalJobs':'Total Jobs',
  'services.service.summary.currentSlotUtiliMaps':'Map Slots',
  'services.service.summary.currentSlotUtiliReduces':'Reduce Slots',
  'services.service.summary.tasksMaps':'Tasks: Maps',
  'services.service.summary.tasksReduces':'Tasks: Reduces',
  'services.service.summary.hbaseMaster':'HBase Master Web UI',
  'services.service.summary.regionServerCount':'Region Server Count',
  'services.service.summary.regionInTransition':'Region In Transition',
  'services.service.summary.masterStarted':'Master Started',
  'services.service.summary.masterActivated':'Master Activated',
  'services.service.summary.averageLoad':'Average Load',
  'services.service.summary.masterHeap':'Master Heap',
  'services.service.summary.moreStats':'more stats here',
  'services.service.summary.clientCount': '{0} Client Hosts',
  'services.service.actions.run.rebalancer':'Run Rebalancer',
  'services.service.actions.run.compaction':'Run Compaction',
  'services.service.actions.run.smoke':'Run Smoke Test',
  'services.service.actions.maintenance':'Maintenance',
  'services.service.summary.unknown':'unknown',
  'services.service.summary.notRunning':'Not Running',
  'services.service.summary.notAvailable':'n/a',

  'services.service.info.metrics.hbase.clusterRequests':'Cluster Requests',
  'services.service.info.metrics.hbase.hlogSplitSize':'HLog Split Size',
  'services.service.info.metrics.hbase.hlogSplitTime':'HLog Split Time',
  'services.service.info.metrics.hbase.regionServerQueueSize':'RegionServer Queue Size',
  'services.service.info.metrics.hbase.regionServerRegions':'RegionServer Regions',
  'services.service.info.metrics.hbase.regionServerRequests':'RegionServer Requests',

  'services.service.info.metrics.hdfs.blockStatus':'Block Status',
  'services.service.info.metrics.hdfs.fileOperations':'File Operations',
  'services.service.info.metrics.hdfs.gc':'Garbage Collection',
  'services.service.info.metrics.hdfs.io':'HDFS I/O',
  'services.service.info.metrics.hdfs.jvmHeap':'JVM Memory Status',
  'services.service.info.metrics.hdfs.jvmThreads':'JVM Thread Status',
  'services.service.info.metrics.hdfs.rpc':'RPC',
  'services.service.info.metrics.hdfs.spaceUtilization':'Total Space Utilization',

  'services.service.info.metrics.mapreduce.gc':'Garbage Collection',
  'services.service.info.metrics.mapreduce.jobsStatus':'Jobs Status',
  'services.service.info.metrics.mapreduce.jvmHeap':'JVM Memory Status',
  'services.service.info.metrics.mapreduce.jvmThreads':'JVM Thread Status',
  'services.service.info.metrics.mapreduce.mapSlots':'Map Slots Utilization',
  'services.service.info.metrics.mapreduce.reduceSlots':'Reduce Slots Utilization',
  'services.service.info.metrics.mapreduce.rpc':'RPC',
  'services.service.info.metrics.mapreduce.tasksRunningWaiting':'Tasks (Running/Waiting)',

  'services.service.info.menu.summary':'Summary',
  'services.service.info.menu.configs':'Configs',
  'services.service.info.summary.hostsRunningMonitor':'{0} hosts running monitor',
  'services.service.info.summary.hostRunningMonitor':'1 host running monitor',
  'services.service.info.summary.serversHostCount':'{0} more',
  'services.service.info.summary.nagiosWebUI':'Nagios Web UI',
  'services.service.info.summary.nagios.noAlerts':'No alerts',
  'services.service.info.summary.nagios.alerts':'Nagios service required for viewing alerts',

  'services.add.header':'Add Service Wizard',
  'services.service.add':'Add Service',


  'hosts.host.add':'Add New Hosts',
  'hosts.host.back':'Back to Hosts',

  'hosts.host.metrics.cpu':'CPU Usage',
  'hosts.host.metrics.disk':'Disk Usage',
  'hosts.host.metrics.load':'Load',
  'hosts.host.metrics.memory':'Memory Usage',
  'hosts.host.metrics.network':'Network Usage',
  'hosts.host.metrics.processes':'Processes',

  'hosts.host.details.deleteHost':'Delete Host',

  'host.host.componentFilter.master':'Master Components',
  'host.host.componentFilter.slave':'Slave Components',
  'host.host.componentFilter.client':'Client Components',

  'hosts.host.start.popup.header':'Confirmation',
  'hosts.host.stop.popup.header':'Confirmation',
  'hosts.host.start.popup.body':'Are you sure?',
  'hosts.host.stop.popup.body':'Are you sure?',
  'hosts.host.healthStatus.heartBeatNotReceived':'The server has not received a heartbeat from this host for more than 3 minutes.',
  'hosts.host.healthStatus.mastersDown':"The following master components are down:\n",
  'hosts.host.healthStatus.slavesDown':"The following slave components are down:\n",
  'hosts.decommission.popup.body':'Are you sure?',
  'hosts.decommission.popup.header':'Confirmation',
  'hosts.delete.popup.body':'Are you sure?',
  'hosts.delete.popup.header':'Confirmation',
  'hosts.cant.do.popup.header':'Operation not allowed',
  'hosts.cant.do.popup.masterList.body':'You cannot delete this host because it is hosting following master services: {0}.',
  'hosts.cant.do.popup.workingList.body':'You cannot delete this host because following slave services are not fully stopped or decommissioned: {0}.',
  'hosts.add.header':'Add Host Wizard',
  'hosts.assignRack':'Assign Rack',

  'charts.horizon.chart.showText':'show',
  'charts.horizon.chart.hideText':'hide',
  'charts.horizon.chart.attributes.cpu':'CPU',
  'charts.horizon.chart.attributes.memory':'Memory',
  'charts.horizon.chart.attributes.network':'Network',
  'charts.horizon.chart.attributes.io':'I/O',

  'charts.heatmap.category.host':'Host',
  'charts.heatmap.item.host.memory':'Memory Used',
  'charts.heatmap.item.host.disk':'Disk Space Used',
  'charts.heatmap.item.host.process':'Total Running Processes',
  'charts.heatmap.category.hdfs':'HDFS',
  'charts.heatmap.category.mapreduce': 'MapReduce',
  'charts.heatmap.unknown': 'Unknown',

  'metric.notFound':'no items found',
  'metric.default':'combined',
  'metric.cpu':'cpu',
  'metric.memory':'disk used',
  'metric.network':'network',
  'metric.io':'io',
  'metric.more':'more',
  'metric.more.cpu':'CPU',
  'metric.more.disk':'Disk',
  'metric.more.load':'Load',
  'metric.more.memory':'Memory',
  'metric.more.network':'Network',
  'metric.more.process':'Process',

  'dashboard.clusterMetrics':'Cluster Metrics',

  'dashboard.clusterMetrics.cpu':'CPU Usage',
  'dashboard.clusterMetrics.load':'Cluster Load',
  'dashboard.clusterMetrics.memory':'Memory Usage',
  'dashboard.clusterMetrics.network':'Network Usage',


  'dashboard.services':'Services',
  'dashboard.services.hosts':'Hosts',
  'dashboard.services.uptime':'{0}',
  'dashboard.services.hdfs.summary':'{0} of {1} nodes live, {2}% capacity used',
  'dashboard.services.hdfs.nanmenode':'NameNode',
  'dashboard.services.hdfs.snanmenode':'Secondary NameNode',
  'dashboard.services.hdfs.capacity':'HDFS Disk Capacity',
  'dashboard.services.hdfs.capacityUsed':'{0} / {1} ({2}% used)',
  'dashboard.services.hdfs.totalFilesAndDirs':'Total Files + Directories',
  'dashboard.services.hdfs.datanodes':'DataNodes',
  'dashboard.services.hdfs.datanodecounts':'DataNodes Status',
  'dashboard.services.hdfs.version':'Version',
  'dashboard.services.hdfs.nameNodeWebUI':'NameNode Web UI',
  'dashboard.services.hdfs.nodes.live':'live',
  'dashboard.services.hdfs.nodes.dead':'dead',
  'dashboard.services.hdfs.nodes.decom':'decommissioning',
  'dashboard.services.hdfs.nodes.uptime':'NameNode Uptime',
  'dashboard.services.hdfs.nodes.heap':'NameNode Heap',
  'dashboard.services.hdfs.nodes.heapUsed':'{0} / {1} ({2}% used)',
  'dashboard.services.hdfs.chart.label':'Capacity (Used/Total)',

  'dashboard.services.mapreduce.summary':'{0} of {1} trackers live, {2} jobs running, {3} jobs waiting',
  'dashboard.services.mapreduce.taskTrackers':'TaskTrackers',
  'dashboard.services.mapreduce.taskTrackerCounts':'TaskTrackers Status',
  'dashboard.services.mapreduce.trackers':'Trackers',
  'dashboard.services.mapreduce.nodes.blacklist':'blacklist',
  'dashboard.services.mapreduce.nodes.graylist':'graylist',
  'dashboard.services.mapreduce.slotCapacity':'Total Slots Capacity',
  'dashboard.services.mapreduce.trackersSummary':'{0} live / {1} total',
  'dashboard.services.mapreduce.jobs':'Total Jobs',
  'dashboard.services.mapreduce.jobsSummary':'{0} submitted / {1} completed',
  'dashboard.services.mapreduce.mapSlots':'Map Slots',
  'dashboard.services.mapreduce.mapSlotsSummary':'{0} occupied / {1} reserved',
  'dashboard.services.mapreduce.reduceSlots':'Reduce Slots',
  'dashboard.services.mapreduce.tasks.maps':'Tasks: Maps',
  'dashboard.services.mapreduce.tasks.reduces':'Tasks: Reduces',
  'dashboard.services.mapreduce.reduceSlotsSummary':'{0} occupied / {1} reserved',
  'dashboard.services.mapreduce.tasksSummary':'{0} running / {1} waiting',
  'dashboard.services.mapreduce.slotCapacitySummary':'{0} maps / {1} reduces / {2} avg per node',
  'dashboard.services.mapreduce.jobTrackerHeap':'JobTracker Heap',
  'dashboard.services.mapreduce.jobTrackerHeapSummary':'{0} of {1} ({2}% used)',
  'dashboard.services.mapreduce.jobTrackerUptime':'Job Trackers Uptime',
  'dashboard.services.mapreduce.chart.label':'Jobs Running',

  'dashboard.services.hbase.summary':'{0} region servers with {1} average load',
  'dashboard.services.hbase.masterServer':'HBase Master',
  'dashboard.services.hbase.masterServerHeap':'Master Heap',
  'dashboard.services.hbase.masterServerHeap.summary':'{0} / {1} ({2}% used)',
  'dashboard.services.hbase.masterServerUptime':'Master Server Uptime',
  'dashboard.services.hbase.averageLoad':'Average Load',
  'dashboard.services.hbase.averageLoadPerServer':'{0} regions per Region Server',
  'dashboard.services.hbase.regionServers':'Region Servers',
  'dashboard.services.hbase.regionServersSummary':'{0} live / {1} total',
  'dashboard.services.hbase.chart.label':'Request Count',
  'dashboard.services.hbase.version':'Version',
  'dashboard.services.hbase.masterWebUI':'Master Web UI',
  'dashboard.services.hbase.regions.transition':'Regions In Transition',
  'dashboard.services.hbase.masterStarted':'Master Started',
  'dashboard.services.hbase.masterActivated':'Master Activated',

  'dashboard.services.hive.client': '{0} Hive Client',
  'dashboard.services.hive.clients': '{0} Hive Clients',

  'dashboard.services.oozie.client': '{0} Oozie Client',
  'dashboard.services.oozie.clients': '{0} Oozie Clients',
  'dashboard.services.oozie.webUi': 'Oozie Web UI',

  'dashboard.services.ganglia.webUi': 'Ganglia Web UI',
  'dashboard.services.ganglia.monitors': 'Ganglia Monitors',

  'dashboard.services.zookeeper.prefix': '{0} of',
  'dashboard.services.zookeeper.title': '{0} ZooKeepers',
  'dashboard.services.zookeeper.postfix': 'running',

  'dashboard.services.configs.popup.stopService.header':'Stop service',
  'dashboard.services.configs.popup.stopService.body' : 'Service needs to be stopped for reconfiguration',
  'dashboard.services.configs.popup.restartService.header' : 'Restart service',
  'dashboard.services.configs.popup.restartService.body' : 'Service needs to be restarted for reconfiguration',
  'timeRange.presets.1hour':'1h',
  'timeRange.presets.12hour':'12h',
  'timeRange.presets.1day':'1d',
  'timeRange.presets.1week':'1wk',
  'timeRange.presets.1month':'1mo',
  'timeRange.presets.1year':'1yr',

  'apps.avgTable.avg': 'Avg',
  'apps.avgTable.min': 'Min',
  'apps.avgTable.max': 'Max',
  'apps.avgTable.jobs': 'Jobs',
  'apps.avgTable.input': 'Input',
  'apps.avgTable.output': 'Output',
  'apps.avgTable.duration': 'Duration',
  'apps.avgTable.oldest': 'Oldest',
  'apps.avgTable.mostRecent': 'Most Recent',
  'apps.filters.all': 'All',
  'apps.filters.filtered': 'Filtered',
  'apps.filters.clearFilters': 'Clear filters',
  'apps.filters.paginationInfo': '{0} - {1} of {2}',
  'apps.filters.customRunDate':'Run Date custom filter',
  'apps.filters.nothingToShow': 'No jobs to display',
  'apps.dagCharts.popup':'Job Charts',
  'apps.dagCharts.popup.job': 'Job',
  'apps.dagCharts.popup.dag':'DAG',
  'apps.dagCharts.popup.tasks':'Timeline & Tasks',
  'apps.dagCharts.popup.tasks.timeline':'Job Timeline',
  'apps.dagCharts.popup.tasks.tasks':'Job Tasks',
  'apps.isRunning.popup.title':'Is running',
  'apps.isRunning.popup.content':'Job is running now',

  'nagios.alerts.unavailable':'Alerts Unavailable',

  'menu.item.dashboard':'Dashboard',
  'menu.item.heatmaps':'Heatmaps',
  'menu.item.services':'Services',
  'menu.item.hosts':'Hosts',
  'menu.item.jobs':'Jobs',
  'menu.item.admin':'Admin'

};