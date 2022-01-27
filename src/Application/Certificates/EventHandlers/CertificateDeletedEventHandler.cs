using Hippo.Application.Common.Models;
using Hippo.Core.Events;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Hippo.Application.Certificates.EventHandlers;

public class CertificateDeletedEventHandler : INotificationHandler<DomainEventNotification<CertificateDeletedEvent>>
{
    private readonly ILogger<CertificateDeletedEventHandler> _logger;

    public CertificateDeletedEventHandler(ILogger<CertificateDeletedEventHandler> logger)
    {
        _logger = logger;
    }

    public Task Handle(DomainEventNotification<CertificateDeletedEvent> notification, CancellationToken cancellationToken)
    {
        var domainEvent = notification.DomainEvent;

        _logger.LogInformation("Hippo Domain Event: {DomainEvent}", domainEvent.GetType().Name);

        return Task.CompletedTask;
    }
}