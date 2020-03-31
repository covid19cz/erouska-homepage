#!/bin/bash
BUILD_DIR=public

rm -rf $BUILD_DIR
mkdir $BUILD_DIR

cp -rv `ls -A | grep -vE "build|README.md|LICENSE|^.*log|^\.|^.*sh|firebase|node_modules|public"` $BUILD_DIR

firebase deploy