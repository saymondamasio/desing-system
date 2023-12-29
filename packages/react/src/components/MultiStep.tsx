import { Text } from './Text'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <div className="">
      <Text className="text-gray-200" size="xs">
        Passo {currentStep} de {size}
      </Text>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --steps-size {
            syntax: '<number>';
            inherits: false;
            initial-value: ${size};
          }
          `,
        }}
      />
      <div className="grid gap-2 mt-1 grid-cols-[repeat(var(--steps-size),1fr)]">
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className="h-1 rounded-px bg-gray-600 data-[active=true]:bg-gray-100"
            data-active={currentStep >= step}
          />
        ))}
      </div>
    </div>
  )
}
