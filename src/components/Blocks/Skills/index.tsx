import React from 'react'
import { SkillSetList, SkillSetItem } from './styled'
import { SkillsProps } from './types'

const SkillsBox = (props: SkillsProps) => {
  return (
    <SkillSetList>
      <SkillSetItem>
        <strong>technologies</strong> {props.technologies.join(' · ')}
      </SkillSetItem>
      <SkillSetItem>
        <strong>languages</strong> {props.languages.join(' · ')}
      </SkillSetItem>
      <SkillSetItem>
        <strong>libraries</strong> {props.libraries.join(' · ')}
      </SkillSetItem>
    </SkillSetList>
  )
}

export default SkillsBox
