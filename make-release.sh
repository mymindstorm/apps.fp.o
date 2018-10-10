#!/bin/bash

# Enable negative glob
shopt -s extglob

VERSION=3.0

rm -rf build
./build.sh
mkdir -p dist
rm -rf dist/apps-fp-o-$VERSION.tar.gz
pushd build
tar -czvf ../dist/apps-fp-o-$VERSION.tar.gz ./
popd

echo Wrote dist/apps-fp-o-$VERSION.tar.gz
