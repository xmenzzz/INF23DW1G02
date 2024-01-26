#!/bin/bash
set -e
service mysql start 
mysql < ../db/temporada.sql
service mysql stop 