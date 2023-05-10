#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Adaptive.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from ipywidgets import DOMWidget
from traitlets import Unicode, List, Dict
from ._frontend import module_name, module_version

UserChannel = Dict({
    "id": Unicode(read_only=True),
    "type": Unicode(read_only=True),
    "displayMetadata": Dict({
        "color": Unicode(read_only=True),
        "name": Unicode(read_only=True)
    })
})


class FDC3ChannelJoin(DOMWidget):
    """TODO: Add docstring here
    """
    _model_name = Unicode('FDC3ChannelJoinModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('FDC3ChannelJoinView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)
    channelId = Unicode(None, True).tag(sync=True)
    userChannels = List(UserChannel, read_only=True).tag(sync=True)


