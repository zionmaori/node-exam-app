#!/bin/sh

set -e

echo "Commencing docker-compose update `date`" >> /home/ubuntu/node-exam-app/logs/docker-compose-update.log
# Do a pull then an update
/usr/bin/docker-compose -f /home/ubuntu/node-exam-app/docker-compose.yml pull  >> /home/ubuntu/node-exam-app/logs/docker-compose-update.log 2>&1
/usr/bin/docker-compose -f /home/ubuntu/node-exam-app/docker-compose.yml up -d >> /home/ubuntu/node-exam-app/logs/docker-compose-update.log 2>&1
echo "Sleeping 10 seconds." >> /home/ubuntu/node-exam-app/logs/docker-compose-update.log
sleep 10
/usr/bin/docker-compose -f /home/ubuntu/node-exam-app/docker-compose.yml restart >> /home/ubuntu/node-exam-app/logs/docker-compose-update.log 2>&1
echo "Finishing docker-compose update `date`" >> /home/ubuntu/node-exam-app/logs/docker-compose-update.log
