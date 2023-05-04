#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Adaptive.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from ipywidgets import DOMWidget
from traitlets import Unicode
from ._frontend import module_name, module_version


class ConnectionStatusWidget(DOMWidget):
    """TODO: Add docstring here
    """
    _model_name = Unicode('ConnectionStatusModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('ConnectionStatusView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)