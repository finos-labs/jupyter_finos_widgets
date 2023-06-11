// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { mock, mockReset } from 'jest-mock-extended'
import { DesktopAgent } from '@finos/fdc3'
import { act, render, screen } from '@testing-library/react'

import { createTestModel } from '../../../test-utils'
import {
  FDC3_READY_ERROR_MSG,
  FDC3_NOT_FOUND_MSG,
  FDC3_READY_UNKNOWN_ERROR,
  FDC3_VERSION_DEFAULT,
} from '../../../constants'
import { FDC3VersionModel } from '..'
import { FDC3VersionComponent } from '../FDC3Version.component'

describe('FDC3VersionModel', () => {
  describe('when the fdc3 global is not available', () => {
    it('has the correct defaults', () => {
      const testModel = createTestModel(FDC3VersionModel)
      expect(testModel).toBeInstanceOf(FDC3VersionModel)
      expect(testModel.get('fdc3Version')).toEqual(FDC3_VERSION_DEFAULT)
    })

    it('uses the not found message when the fdc3 timeout error occurs', (done) => {
      const mockReady = async () => {
        throw new Error(FDC3_READY_ERROR_MSG)
      }
      const testModel = createTestModel(
        FDC3VersionModel,
        {},
        undefined,
        mockReady
      )

      testModel.once('change:fdc3Version', () => {
        expect(testModel.get('fdc3Version')).toEqual(FDC3_NOT_FOUND_MSG)
        done()
      })
    })

    it('uses the unknown error message when another error occurs', (done) => {
      const mockReady = async () => {
        throw new Error(Math.random().toString())
      }
      const testModel = createTestModel(
        FDC3VersionModel,
        {},
        undefined,
        mockReady
      )

      testModel.once('change:fdc3Version', () => {
        expect(testModel.get('fdc3Version')).toEqual(FDC3_READY_UNKNOWN_ERROR)
        done()
      })
    })

    it('uses the unknown error message something other than an error is thrown', (done) => {
      const mockReady = async () => {
        throw Math.random().toString()
      }
      const testModel = createTestModel(
        FDC3VersionModel,
        {},
        undefined,
        mockReady
      )

      testModel.once('change:fdc3Version', () => {
        expect(testModel.get('fdc3Version')).toEqual(FDC3_READY_UNKNOWN_ERROR)
        done()
      })
    })

    it('works correctly in the vanilla jsdom where no fdc3 global exists', (done) => {
      const testModel = createTestModel(
        FDC3VersionModel,
        {},
        undefined,
        undefined,
        1
      )

      testModel.once('change:fdc3Version', () => {
        expect(testModel.get('fdc3Version')).toEqual(FDC3_NOT_FOUND_MSG)
        done()
      })
    })
  })

  describe('when the fdc3 global is available', () => {
    it('stores the returned version number from global fdc3 call', (done) => {
      const windowFDC3 = window.fdc3
      if (windowFDC3 !== undefined) {
        throw Error('FDC3 should be undefined')
      }

      const mockFDC3 = mock<DesktopAgent>()
      const randomVersion = Math.random().toString()

      mockFDC3.getInfo.calledWith().mockResolvedValueOnce({
        fdc3Version: randomVersion,
        provider: 'Mock',
        optionalFeatures: {
          OriginatingAppMetadata: false,
          UserChannelMembershipAPIs: false,
        },
        appMetadata: {
          appId: 'Mock Id',
        },
      })

      window.fdc3 = mockFDC3

      const testModel = createTestModel(FDC3VersionModel)
      testModel.once('change:fdc3Version', () => {
        expect(
          testModel.get('fdc3Version').includes(randomVersion)
        ).toBeTruthy()
        window.fdc3 = windowFDC3
        mockReset(mockFDC3)
        done()
      })
    })
  })
})

describe('FDC3VersionView', () => {
  describe('when the fdc3 global is not available', () => {
    it('displays the correct defaults', () => {
      const testModel = createTestModel(FDC3VersionModel, {}, false)
      act(() => {
        render(<FDC3VersionComponent model={testModel} />)
      })
      expect(screen.findByText(FDC3_VERSION_DEFAULT))
    })

    it('displays the fdc3 not found message as it content', (done) => {
      const testModel = createTestModel(
        FDC3VersionModel,
        {},
        undefined,
        undefined,
        1
      )

      act(() => {
        render(<FDC3VersionComponent model={testModel} />)

        testModel.once('change:fdc3Version', () => {
          expect(screen.findByText(FDC3_NOT_FOUND_MSG))
          done()
        })
      })
    })
  })

  describe('when the fdc3 global is available', () => {
    it('stores the returned version number from global fdc3 call', (done) => {
      const windowFDC3 = window.fdc3
      if (windowFDC3 !== undefined) {
        throw Error('FDC3 should be undefined')
      }

      const mockFDC3 = mock<DesktopAgent>()
      const randomVersion = Math.random().toString()

      mockFDC3.getInfo.calledWith().mockResolvedValueOnce({
        fdc3Version: randomVersion,
        provider: 'Mock',
        optionalFeatures: {
          OriginatingAppMetadata: false,
          UserChannelMembershipAPIs: false,
        },
        appMetadata: {
          appId: 'Mock Id',
        },
      })

      window.fdc3 = mockFDC3

      const testModel = createTestModel(
        FDC3VersionModel,
        {},
        undefined,
        undefined,
        1
      )
      act(() => {
        render(<FDC3VersionComponent model={testModel} />)

        testModel.once('change:fdc3Version', () => {
          expect(screen.findByText(randomVersion))

          window.fdc3 = windowFDC3
          mockReset(mockFDC3)
          done()
        })
      })
    })
  })
})
