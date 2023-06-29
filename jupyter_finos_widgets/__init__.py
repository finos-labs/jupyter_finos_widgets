#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Adaptive.
# Distributed under the terms of the Modified BSD License.

from .fdc3_version import FDC3Version
from .fdc3_channel_join import FDC3ChannelJoin
from .fdc3_context_display import FDC3ContextDisplay
from .fdc3_ticker_input import FDC3TickerInput
from .fdc3_connection_status import FDC3ConnectionStatus
from .fdc3_raise_intent import FDC3RaiseIntent
from ._version import __version__, version_info

def _jupyter_labextension_paths():
    """Called by Jupyter Lab Server to detect if it is a valid labextension and
    to install the widget
    Returns
    =======
    src: Source directory name to copy files from. Webpack outputs generated files
        into this directory and Jupyter Lab copies from this directory during
        widget installation
    dest: Destination directory name to install widget files to. Jupyter Lab copies
        from `src` directory into <jupyter path>/labextensions/<dest> directory
        during widget installation
    """
    return [{
        'src': 'labextension',
        'dest': 'jupyter_fdc3_widgets',
    }]


def _jupyter_nbextension_paths():
    """Called by Jupyter Notebook Server to detect if it is a valid nbextension and
    to install the widget
    Returns
    =======
    section: The section of the Jupyter Notebook Server to change.
        Must be 'notebook' for widget extensions
    src: Source directory name to copy files from. Webpack outputs generated files
        into this directory and Jupyter Notebook copies from this directory during
        widget installation
    dest: Destination directory name to install widget files to. Jupyter Notebook copies
        from `src` directory into <jupyter path>/nbextensions/<dest> directory
        during widget installation
    require: Path to importable AMD Javascript module inside the
        <jupyter path>/nbextensions/<dest> directory
    """
    return [{
        'section': 'notebook',
        'src': 'nbextension',
        'dest': 'jupyter_fdc3_widgets',
        'require': 'jupyter_fdc3_widgets/extension'
    }]
