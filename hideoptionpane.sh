#!/bin/sh

appname=preferencescustomizer

cp buildscript/makexpi.sh ./
./makexpi.sh -n $appname -o
rm makexpi.sh
