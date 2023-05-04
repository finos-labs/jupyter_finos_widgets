![badge-labs](https://user-images.githubusercontent.com/327285/230928932-7c75f8ed-e57b-41db-9fb7-a292a13a1e58.svg)

<img align="right" width="40%" src="https://www.finos.org/hubfs/FINOS/finos-logo/FINOS_Icon_Wordmark_Name_RGB_horizontal.png">

# jupyter_finos_widgets

FDC3 enabled Jupyter Widgets

## Using DCO to sign your commits

All commits must be signed with a DCO signature to avoid being flagged by the DCO Bot. This means that your commit log message must contain a line that looks like the following one, with your actual name and email address:

```
Signed-off-by: John Doe <john.doe@example.com>
```

Adding the `-s` flag to your `git commit` will add that line automatically. You can also add it manually as part of your commit log message or add it afterwards with `git commit --amend -s`.

## About

This project was bootstrapped using the FINOS Software Project Blueprint.

Project blueprint is a GitHub repository template for all [Fintech Open Source Foundation (FINOS)](https://www.finos.org/) hosted GitHub repositories, contributed and maintained by FINOS as part of the [Open Developer Platform (ODP)](https://odp.finos.org) initiative.

## License

Copyright 2020 Fintech Open Source Foundation

Distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

SPDX-License-Identifier: [Apache-2.0](https://spdx.org/licenses/Apache-2.0)

# Cookiecutter README

# About

This project was bootstrapped as described in the documentation - [link](https://ipywidgets.readthedocs.io/en/8.0.5/examples/Widget%20Custom.html)

Note this project uses `yarn` for package management.

All I've done is add an nvmrc and add the yarn.lock to source. 

# jupyter_finos_widgets

[![Build Status](https://travis-ci.org/chuck-adaptive/jupyter_finos_widgets.svg?branch=master)](https://travis-ci.org/chuck-adaptive/jupyter_finos_widgets)
[![codecov](https://codecov.io/gh/chuck-adaptive/jupyter_finos_widgets/branch/master/graph/badge.svg)](https://codecov.io/gh/chuck-adaptive/jupyter_finos_widgets)


A Custom Jupyter Widget Library

## Installation

You can install using `pip`:

```bash
pip install jupyter_finos_widgets
```

If you are using Jupyter Notebook 5.2 or earlier, you may also need to enable
the nbextension:
```bash
jupyter nbextension enable --py [--sys-prefix|--user|--system] jupyter_finos_widgets
```

## Development Installation

Create a dev environment:
```bash
conda create -n jupyter_finos_widgets-dev -c conda-forge nodejs yarn python jupyterlab
conda activate jupyter_finos_widgets-dev
```

Install the python. This will also build the TS package.
```bash
pip install -e ".[test, examples]"
```

When developing your extensions, you need to manually enable your extensions with the
notebook / lab frontend. For lab, this is done by the command:

```
jupyter labextension develop --overwrite .
yarn run build
```

For classic notebook, you need to run:

```
jupyter nbextension install --sys-prefix --symlink --overwrite --py jupyter_finos_widgets
jupyter nbextension enable --sys-prefix --py jupyter_finos_widgets
```

Note that the `--symlink` flag doesn't work on Windows, so you will here have to run
the `install` command every time that you rebuild your extension. For certain installations
you might also need another flag instead of `--sys-prefix`, but we won't cover the meaning
of those flags here.

### How to see your changes
#### Typescript:
If you use JupyterLab to develop then you can watch the source directory and run JupyterLab at the same time in different
terminals to watch for changes in the extension's source and automatically rebuild the widget.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
yarn run watch
# Run JupyterLab in another terminal
jupyter lab
```

After a change wait for the build to finish and then refresh your browser and the changes should take effect.

#### Python:
If you make a change to the python code then you will need to restart the notebook kernel to have it take effect.

## Updating the version

To update the version, install tbump and use it to bump the version.
By default it will also create a tag.

```bash
pip install tbump
tbump <new-version>
```
